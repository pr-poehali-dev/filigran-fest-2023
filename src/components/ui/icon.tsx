
import React from 'react';
import * as Icons from 'lucide-react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof Icons;
  size?: number;
  fallback?: keyof typeof Icons;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, fallback = 'CircleAlert', size = 24, ...props }, ref) => {
    const LucideIcon = Icons[name] || Icons[fallback];
    return <LucideIcon ref={ref} width={size} height={size} {...props} />;
  }
);

Icon.displayName = 'Icon';

export default Icon;
