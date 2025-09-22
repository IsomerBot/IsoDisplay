'use client';

import { useState } from 'react';
import { Permission } from '@/generated/prisma';
import { 
  Shield, 
  Image, 
  Monitor, 
  Users as UsersIcon, 
  Settings,
  ChevronDown,
  ChevronRight,
  ToggleLeft,
  ToggleRight,
  CheckCircle,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface UserPermissionsPanelProps {
  permissions: Permission[];
  onChange: (permissions: Permission[]) => void;
  disabled?: boolean;
}

// Permission categories with descriptions
const PERMISSION_CATEGORIES = {
  'Content Management': {
    icon: Image,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    permissions: [
      {
        key: Permission.CONTENT_CREATE,
        label: 'Manage Content',
        description: 'Upload and edit media items'
      },
      {
        key: Permission.CONTENT_DELETE,
        label: 'Delete Content',
        description: 'Remove media from the library'
      }
    ]
  },
  'Playlist Management': {
    icon: Shield,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    permissions: [
      {
        key: Permission.PLAYLIST_CREATE,
        label: 'Create Playlists',
        description: 'Build and edit playlists'
      },
      {
        key: Permission.PLAYLIST_DELETE,
        label: 'Delete Playlists',
        description: 'Remove playlists from the system'
      },
      {
        key: Permission.PLAYLIST_ASSIGN,
        label: 'Assign Playlists',
        description: 'Assign playlists to displays'
      }
    ]
  },
  'Display Management': {
    icon: Monitor,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    permissions: [
      {
        key: Permission.DISPLAY_CONTROL,
        label: 'Control Displays',
        description: 'Manage display playback and settings'
      }
    ]
  },
  'User Management': {
    icon: UsersIcon,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    permissions: [
      {
        key: Permission.USER_CONTROL,
        label: 'Manage Users',
        description: 'Create users and adjust their access'
      }
    ]
  },
  'System Settings': {
    icon: Settings,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    permissions: [
      {
        key: Permission.SYSTEM_SETTINGS,
        label: 'System Settings',
        description: 'Modify global configuration'
      }
    ]
  }
};

// Role presets
const ROLE_PRESETS = {
  admin: {
    name: 'Administrator',
    description: 'Full system access',
    permissions: Object.values(Permission)
  },
  manager: {
    name: 'Manager',
    description: 'Manage content, playlists, and displays',
    permissions: [
      Permission.CONTENT_CREATE,
      Permission.CONTENT_DELETE,
      Permission.PLAYLIST_CREATE,
      Permission.PLAYLIST_DELETE,
      Permission.PLAYLIST_ASSIGN,
      Permission.DISPLAY_CONTROL
    ]
  },
  viewer: {
    name: 'Viewer',
    description: 'View-only access',
    permissions: []
  }
};

export function UserPermissionsPanel({ 
  permissions, 
  onChange, 
  disabled = false 
}: UserPermissionsPanelProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(Object.keys(PERMISSION_CATEGORIES))
  );

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const togglePermission = (permission: Permission) => {
    if (disabled) return;
    
    const newPermissions = permissions.includes(permission)
      ? permissions.filter(p => p !== permission)
      : [...permissions, permission];
    
    onChange(newPermissions);
  };

  const applyPreset = (preset: typeof ROLE_PRESETS.admin) => {
    if (disabled) return;
    onChange(preset.permissions);
  };

  const hasAllInCategory = (categoryPermissions: typeof PERMISSION_CATEGORIES['Content Management']['permissions']) => {
    return categoryPermissions.every(p => permissions.includes(p.key));
  };

  const toggleAllInCategory = (categoryPermissions: typeof PERMISSION_CATEGORIES['Content Management']['permissions']) => {
    if (disabled) return;
    
    const hasAll = hasAllInCategory(categoryPermissions);
    const categoryKeys = categoryPermissions.map(p => p.key);
    
    if (hasAll) {
      // Remove all permissions from this category
      onChange(permissions.filter(p => !categoryKeys.includes(p)));
    } else {
      // Add all permissions from this category
      const newPermissions = [...permissions];
      categoryKeys.forEach(key => {
        if (!newPermissions.includes(key)) {
          newPermissions.push(key);
        }
      });
      onChange(newPermissions);
    }
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions / Role Presets */}
      <div>
        <h3 className="text-sm font-medium text-white/70 mb-3">Quick Actions</h3>
        <div className="flex flex-wrap gap-2">
          {Object.entries(ROLE_PRESETS).map(([key, preset]) => (
            <Button
              key={key}
              variant="outline"
              size="sm"
              onClick={() => applyPreset(preset)}
              disabled={disabled}
              className="bg-white/5 border-white/20 text-white hover:bg-white/10"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              {preset.name}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => onChange([])}
            disabled={disabled}
            className="bg-white/5 border-white/20 text-white hover:bg-white/10"
          >
            Clear All
          </Button>
        </div>
      </div>

      {/* Permission Categories */}
      <div className="space-y-3">
        {Object.entries(PERMISSION_CATEGORIES).map(([category, config]) => {
          const Icon = config.icon;
          const isExpanded = expandedCategories.has(category);
          const hasAll = hasAllInCategory(config.permissions);
          const hasSome = config.permissions.some(p => permissions.includes(p.key));
          
          return (
            <div 
              key={category}
              className={`rounded-lg border ${config.bgColor} border-white/20 overflow-hidden`}
            >
              {/* Category Header */}
              <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/5 transition-colors"
                onClick={() => toggleCategory(category)}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${config.color}`} />
                  <span className="font-medium text-white">{category}</span>
                  <span className="text-xs text-white/50">
                    ({config.permissions.filter(p => permissions.includes(p.key)).length}/{config.permissions.length})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleAllInCategory(config.permissions);
                    }}
                    disabled={disabled}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    {hasAll ? (
                      <ToggleRight className="w-5 h-5 text-brand-orange-500" />
                    ) : hasSome ? (
                      <ToggleLeft className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <ToggleLeft className="w-5 h-5" />
                    )}
                  </button>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-white/50" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-white/50" />
                  )}
                </div>
              </div>

              {/* Permission Items */}
              {isExpanded && (
                <div className="px-4 pb-4 space-y-2 border-t border-white/10">
                  {config.permissions.map(perm => (
                    <div
                      key={perm.key}
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => togglePermission(perm.key)}
                          disabled={disabled}
                          className="flex items-center"
                        >
                          {permissions.includes(perm.key) ? (
                            <ToggleRight className="w-6 h-6 text-brand-orange-500" />
                          ) : (
                            <ToggleLeft className="w-6 h-6 text-white/30" />
                          )}
                        </button>
                        <div>
                          <div className="text-white font-medium">{perm.label}</div>
                          <div className="text-white/50 text-xs">{perm.description}</div>
                        </div>
                      </div>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="w-4 h-4 text-white/30" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Permission key: {perm.key}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="p-3 bg-white/5 rounded-lg border border-white/20">
        <div className="text-sm text-white/70">
          <span className="font-medium">{permissions.length}</span> permissions selected
          {permissions.includes('ADMIN' as Permission) && (
            <span className="ml-2 text-orange-400">(Administrator - Full Access)</span>
          )}
        </div>
      </div>
    </div>
  );
}
