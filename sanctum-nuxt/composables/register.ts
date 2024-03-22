const client = useSanctumClient();

export const register = async (name: string, email: string, password: string) => {
    const result = await useAsyncData("register", () =>
        client("/register", {
            method: 'POST',
            body: {
                name: name,
                email: email,
                password: password,
                password_confirmation: password
            }
        })
    );

    if (result.data.value === undefined && result.error.value === null) {
        return true;
    } else {
        return result.error.value!;
    }
}