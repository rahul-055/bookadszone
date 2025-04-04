
export interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;  // Content inside the button
    disabled?: boolean;
    className?: string;
}

export interface InputProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type: string;
    disabled?: boolean;
    className?: string;
    name?:string;
    id?:string;
    pattern?:string;
    required?:boolean
}

export interface IconProps {
    icon: any;
    className?: string;
}
export interface ComIconProps {
    icon: any;
    className?: string;
    badge: boolean;
    onSHowOrRedirect?: () => void;
    // onClickIcon?:() => void;
}
export interface CardIconProps {
    icon: any;
    className?: string;
}
export interface ImgItemProps {
    className?: string;
    onDrop?: () => void;
}

export interface SidebarItemsProps {
    id: number;
    icon: {};
    label: string;
}

interface DropdownOption {
    label: string;
    imgSrc: string;
}
export interface DropdownProps {
    options?: DropdownOption[];
    onOptionSelect?: (options: DropdownOption) => void;
}

export interface Notification {
    userImage?: string;
    message?: string;
    timestamp: string;
}

export interface NotificationProps {
    list?: Notification[];
    onNotificationSelect?: (list: DropdownOption) => void;
}

export interface SearchBoxProps {
    onSearchChange?: () => void;
}
// For table 
interface Product {
    id: string;
    image: string;
    name: string;
    sku: string;
    manufacturedDate: string;
    expiredDate: string;
}

export interface ProductTableProps {
    headers: string[];
    data: Record<string, any>[];
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
    onView?: (id: string) => void;
    isView?: boolean;
    isEdit?: boolean;
    isDelete?: boolean;
    isAction:boolean
}



// ========================

