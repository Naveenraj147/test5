public with sharing class MapController {
    public MapController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        List<Account> lstAcc = new List<Account>();
        try {
            lstAcc = [select Id, Name, ShippingStreet, ShippingCity, ShippingPostalCode, ShippingCountry, ShippingState, Description
                                    From Account where ShippingStreet != null  Limit 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return lstAcc;
    }
}