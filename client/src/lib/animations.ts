import { keyframes } from "@/lib/utils";

export const fadeIn = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
});

export const slideIn = keyframes({
  '0%': { transform: 'translateY(20px)', opacity: '0' },
  '100%': { transform: 'translateY(0)', opacity: '1' },
});

export const bounce = keyframes({
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-20px)' },
});
