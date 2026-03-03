import { Control, FieldValues, Path } from "react-hook-form";
import { LucideIcon } from "lucide-react";

export interface FileUploadFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    acceptTypes: string[];
    disabled?: boolean;
    icon: LucideIcon;
    placeholder: string;
    hint: string;
}

export interface VoiceSelectorProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    className?: string;
}
