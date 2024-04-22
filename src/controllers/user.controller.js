export const login = async (req, res) => {
    const { email, password } = req.body;
    if ([email, password].some((field) => !field || field.trim() === "")) {
        return res.status(400).json({
            success: false,
            error: "All fields are required"
        });
    }
    return res.status(200).json({
        success: true,
        message: "User logged successfully"
    });
};

export const signup = async (req, res) => {
    const { email, password, name } = req.body;
    if ([email, password, name].some((field) => !field || field.trim() === "")) {
        return res.status(400).json({
            success: false,
            error: "All fields are required"
        });
    }
    return res.status(200).json({
        success: true,
        message: "User registered successfully",
        user: {
            email,
            name,
            password
        }
    });
};
