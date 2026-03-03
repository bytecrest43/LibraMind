'use client';

import React from 'react';
import { voiceCategories, voiceOptions } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { VoiceSelectorProps } from '@/types';
import { FormControl } from './ui/form';

const VoiceSelector = ({ value, onChange, disabled, className }: VoiceSelectorProps) => {
    return (
        <div className={cn('space-y-6', className)}>
            <RadioGroup
                value={value}
                onValueChange={onChange}
                disabled={disabled}
                className="space-y-8"
            >
                {/* Male Voices */}
                <div className="space-y-4">
                    <h4 className="text-sm font-medium text-[var(--text-secondary)]">Male Voices</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                        {voiceCategories.male.map((voiceId) => {
                            const voice = voiceOptions[voiceId as keyof typeof voiceOptions];
                            const isSelected = value === voiceId;
                            return (
                                <Label
                                    key={voiceId}
                                    className={cn(
                                        'voice-selector-option',
                                        isSelected ? 'voice-selector-option-selected' : 'voice-selector-option-default',
                                        disabled && 'voice-selector-option-disabled'
                                    )}
                                >
                                    <FormControl>
                                        <RadioGroupItem value={voiceId} id={voiceId} className="sr-only" />
                                    </FormControl>
                                    <div className="flex flex-col gap-1 w-full">
                                        <div className="flex items-center gap-2">
                                            <div className={cn(
                                                "w-4 h-4 rounded-full border flex items-center justify-center",
                                                isSelected ? "border-[var(--accent-warm)]" : "border-gray-300"
                                            )}>
                                                {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-warm)]" />}
                                            </div>
                                            <span className={cn("font-bold text-[#212a3b]", isSelected && "text-[var(--text-primary)]")}>{voice.name}</span>
                                        </div>
                                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                                            {voice.description}
                                        </p>
                                    </div>
                                </Label>
                            );
                        })}
                    </div>
                </div>

                {/* Female Voices */}
                <div className="space-y-4">
                    <h4 className="text-sm font-medium text-[var(--text-secondary)]">Female Voices</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full md:w-2/3">
                        {voiceCategories.female.map((voiceId) => {
                            const voice = voiceOptions[voiceId as keyof typeof voiceOptions];
                            const isSelected = value === voiceId;
                            return (
                                <Label
                                    key={voiceId}
                                    className={cn(
                                        'voice-selector-option',
                                        isSelected ? 'voice-selector-option-selected' : 'voice-selector-option-default',
                                        disabled && 'voice-selector-option-disabled'
                                    )}
                                >
                                    <FormControl>
                                        <RadioGroupItem value={voiceId} id={voiceId} className="sr-only" />
                                    </FormControl>
                                    <div className="flex flex-col gap-1 w-full">
                                        <div className="flex items-center gap-2">
                                            <div className={cn(
                                                "w-4 h-4 rounded-full border flex items-center justify-center",
                                                isSelected ? "border-[var(--accent-warm)]" : "border-gray-300"
                                            )}>
                                                {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-warm)]" />}
                                            </div>
                                            <span className={cn("font-bold text-[#212a3b]", isSelected && "text-[var(--text-primary)]")}>{voice.name}</span>
                                        </div>
                                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                                            {voice.description}
                                        </p>
                                    </div>
                                </Label>
                            );
                        })}
                    </div>
                </div>
            </RadioGroup>
        </div>
    );
};

export default VoiceSelector;
