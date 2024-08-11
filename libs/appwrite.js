import { Account, Avatars, Client, Databases, ID, Query, Permission, Role } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.nahomaura',
    projectId: '66b75162001932e5cefb',
    databaseId: '66b753810039dd480efc',
    userCollectionId: '66b753aa003e22f5225b',
    videoCollection: '66b754d50027a3ca3d39',
    storageId: '66b757b4000d4f218463'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
    ;
const account = new Account(client);
const avatar = new Avatars(client)
const database = new Databases(client)

export async function login(email, password) {
    try {
        await account.createEmailPasswordSession(email, password);
        return await account.get();
    } catch (error) {
        throw error;
    }
}

export async function register(email, password, username) {
    try {
        const newAccount = await account.create(ID.unique(), email, password, username);
        const avatarUrl = avatar.getInitials(username)
        await login(email, password)
        const newUser = await database.createDocument(
            config.databaseId,
            config.userCollectionId,
            {
                accountID: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            },
            [
                Permission.read(Role.user()),
                Permission.update(Role.user()),
                Permission.delete(Role.user())
            ]
        )
        return newUser;
    } catch (error) {
        throw error;
    }
}

export async function getCurrentUser() {
    try {
        const currentAccount = await account.get();
        const currentUser = await database.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountID', currentAccount.$id)]
        )
        return currentUser.documents[0];
    } catch (error) {
        throw error;
    }
}
// export const createUser = async (username, password, email) => {
//     try {
//         const newAccount = await account.create(
//             ID.unique(),
//             email,
//             password,
//             username
//         )
//         if (!newAccount) throw Error;
//         else {
//             const avatarUrl = avatar.getInitials(username)
//             await signIn(email, password)
//             const newUser = await database.createDocument(
//                 config.databaseId,
//                 config.userCollectionId,
//                w {
//                    accountID: newAccount.$id,
//                     email,
//                     username,
//                     avatar: avatarUrl

//                 }
//             )
//         }
//     } catch (error) {
//         console.log(error);

//     }
// }
// export const signIn = (email, password) => {
//     try {
//         const session = account.createEmailPasswordSession(email, password)
//         return session
//     } catch (error) {
//         throw new Error(error);
//     }
// }


// export const getCurrentUser=async ()=>{
//     try {
//         const currenAccount=await account.get();
//         if(!currenAccount) throw Error;
        
//         const currentUser=await database.listDocuments(
//             config.databaseId,
//             config.userCollectionId,
//             [Query.equal('accountId',currenAccount.$id)]
//         )
//         if(!currentUser) throw Error;
//         return currentUser.documents[0]
//     } catch (error) {
//         console.log(error);
        
//     }
// }