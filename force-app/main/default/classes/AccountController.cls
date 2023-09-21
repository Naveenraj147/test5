public with sharing class AccountController {
    public AccountController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        
            List<Account> accounts = [SELECT Id, Name, Phone, Rating, ShippingCity FROM Account];
            return accounts;
    }
}