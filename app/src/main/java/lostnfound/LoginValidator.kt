package lostnfound

object LoginValidator {

    fun isValid(email: String, password: String): Boolean {
        return email.isNotBlank() &&
                email.contains("@") &&
                password.isNotBlank()
    }
}