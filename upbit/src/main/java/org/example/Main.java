package org.example;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import java.util.UUID;

public class Main {
  public static void main(String[] args) {
      String accessKey = "ErlV4hkzq0rFms1qHswsN3YspFx7UaSRuBRYOjr";
      String secretKey = "bQGHn3XsMeFOT8KrSk6a6KYFesdqxSFKhzp9eQTj";

      Algorithm algorithm = Algorithm.HMAC256(secretKey);

      String jwtToken = JWT.create()
        .withClaim("access_key", accessKey)
        .withClaim("nonce", UUID.randomUUID().toString())
        .sign(algorithm);

      String authenticationToken = "Bearer " + jwtToken;

      System.out.println("authenticationToken: " + authenticationToken);
  }
}