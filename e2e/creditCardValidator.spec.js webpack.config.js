describe("Credit Card Validator", () => {
    it("should validate a valid Visa card number", () => {
      const cardNumber = "4111111111111111";
      expect(luhnCheck(cardNumber)).toBe(true);
      expect(determinePaymentSystem(cardNumber)).toBe("Visa");
    });
  
    it("should validate a valid Mastercard card number", () => {
      const cardNumber = "5105105105105100";
      expect(luhnCheck(cardNumber)).toBe(true);
      expect(determinePaymentSystem(cardNumber)).toBe("Mastercard");
    });
  
    it("should validate a valid Mir card number", () => {
      const cardNumber = "2200111122223333";
      expect(luhnCheck(cardNumber)).toBe(true);
      expect(determinePaymentSystem(cardNumber)).toBe("Mir");
    });
  
    // it("should invalidate an invalid card number", () => {
    //   const cardNumber = "1234567890123456";
})