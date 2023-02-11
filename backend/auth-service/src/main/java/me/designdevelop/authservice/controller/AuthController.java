package me.designdevelop.authservice.controller;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {


//    public void registerUser(User user) {
//        user.setConfirmationCode(UUID.randomUUID().toString());
//        userRepository.save(user);
//        sendConfirmationEmail(user.getEmail(), user.getConfirmationCode());
//    }
//
//    private void sendConfirmationEmail(String email, String confirmationCode) {
//        // Implementation to send an email with the confirmation link
//    }
//
//
//    @GetMapping("/confirm")
//    public ResponseEntity<String> confirmUser(@RequestParam("code") String confirmationCode) {
//        User user = userRepository.findByConfirmationCode(confirmationCode);
//        if (user == null) {
//            return ResponseEntity.notFound().build();
//        }
//        user.setConfirmed(true);
//        userRepository.save(user);
//        return ResponseEntity.ok().build();
//    }

}
