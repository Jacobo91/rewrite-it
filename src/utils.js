export const generateUniqueId = () => {
    const timestamp = Date.now().toString(36); // Convert current timestamp to base36
    const randomStr = Math.random().toString(36).substring(2, 8); // Generate a random string (remove "0." prefix and take 6 characters)
    return timestamp + randomStr;
}
