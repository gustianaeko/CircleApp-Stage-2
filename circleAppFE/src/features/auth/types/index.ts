export interface RegisterForm {
  fullName: string;
  email: string;
  password: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface ForgotPasswordForm {
  email: string;
}

export interface ResetPasswordForm {
  newPassword: string;
  confirmNewPassword: string;
}
