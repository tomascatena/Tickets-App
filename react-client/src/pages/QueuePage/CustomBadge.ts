import { Palette, PaletteColor } from '@mui/material';
import { styled } from '@mui/material/styles';

interface CustomBadgeProps {
  color: 'success' | 'error' | 'warning' | 'info' | 'primary' | 'secondary';
  fontSize?: string;
}

export const CustomBadge = styled('span', {
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'fontSize',
})<CustomBadgeProps>(({ theme, color, fontSize }) => ({
  color: (theme.palette[color as keyof Palette] as PaletteColor).main,
  fontSize,
  border: '1px solid',
  padding: '0.5rem',
  borderRadius: '0.5rem',
}));
