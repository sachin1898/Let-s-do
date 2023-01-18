import { Client, Account } from 'appwrite';

/**
 * Initialization (Configuring) of appwrite SDK by providing endpoint and project id.
 */
const client = new Client()
    .setEndpoint('http://20.63.106.233/v1') // Your API Endpoint
    .setProject('63a9ce88a84ef9dfdd10');// Your project ID

/**
 * Account initialization using SDK configuration to access appwrite services.
 */
const account = new Account(client)

export default account