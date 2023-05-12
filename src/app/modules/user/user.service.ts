import { User } from "./user.model";

export const createUserToDB = async () => {
    const user = await new User({
        id: "9096",
        role: "teacher",
        password: "123456",
        name: {
            firstName: "Mr.",
            middleName: "Kamrul",
            lastName: "Uddin",
        },
        dateOfBirth: "14-August-1998",
        gender: "male",
        email: "mizanbd.eee@gmail.com",
        contactNo: "01719402933",
        emergencyContactNo: "01723100818",
        presentAddress: "Vodra, Rajshahi Sadar, Rajshahi, Bangladesh",
        permanentAddress: "Vill: Dighirpar, Post: Palsha, Thana: Atrai, District: Naogaon, Bangladesh"
    });
    await user.save();
    console.log(user);
    return user;
};

// get user from DB
export const getUsersFromDB = async () => {
    const users = await User.find();
    return users;
}
