import AuthService from "../modules/auth/services/auth_service";

const HEADER_NAME = 'authorization';

export const context = async ({ req }: any) => {
  const authToken = req.headers[HEADER_NAME];
  try {
    const authService = new AuthService
    const user = await authService.getUserByToken(authToken)
    const currentUser = user ? user : null

    return {currentUser}
  } catch (e) {
    console.warn(`Unable to authenticate using auth token: ${authToken}`);
  }
}
