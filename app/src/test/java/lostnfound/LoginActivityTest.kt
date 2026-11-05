package lostnfound

import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class LoginActivityTest {

    @Test
    fun validEmailAndPassword() {
        assertTrue(
            LoginValidator.isValid(
                "student@example.com",
                "password123"
            )
        )
    }

    @Test
    fun emptyEmailIsRejected() {
        assertFalse(
            LoginValidator.isValid(
                "",
                "password123"
            )
        )
    }

    @Test
    fun invalidEmailIsRejected() {
        assertFalse(
            LoginValidator.isValid(
                "studentexample.com",
                "password123"
            )
        )
    }

    @Test
    fun emptyPasswordIsRejected() {
        assertFalse(
            LoginValidator.isValid(
                "student@example.com",
                ""
            )
        )
    }
}