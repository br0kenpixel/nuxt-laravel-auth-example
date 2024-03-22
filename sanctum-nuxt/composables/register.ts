export const register = async (name: string, email: string, password: string) => {
    const client = useSanctumClient();

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

    let return_val = {
        success: false,
        message: undefined as undefined | string
    };

    if (result.data.value === undefined && result.error.value === null) {
        return_val.success = true;
    } else {
        return_val.message = ((result.error.value) as any).data.message as string;
    }

    return return_val;
}