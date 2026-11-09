
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';

import { LoginValidator } from './LoginValidator';

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        if (LoginValidator.isValid(username, password)) {
            Alert.alert('Success', 'Input is valid!');
        } else {
            Alert.alert('Error', 'Please enter a valid username and password.');
        }
    }

    function handleCreateAccount() {
        // Account creation will be added later.
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Lost & Found
            </Text>

            <Text style={styles.subtitle}>
                Sign in to your account
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                autoCorrect={false}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}
            >
                <Text style={styles.loginButtonText}>
                    Log In
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={handleCreateAccount}
                style={styles.createAccountButton}
            >
                <Text style={styles.createAccountText}>
                    Create an account
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 12
    },

    subtitle: {
        fontSize: 16,
        marginBottom: 32
    },

    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 6,
        padding: 14,
        fontSize: 16,
        marginBottom: 16
    },

    loginButton: {
        width: '100%',
        backgroundColor: '#2196F3',
        padding: 15,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 8
    },

    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    },

    createAccountButton: {
        marginTop: 16,
        padding: 12
    },

    createAccountText: {
        color: '#2196F3',
        fontSize: 14
    }
});
