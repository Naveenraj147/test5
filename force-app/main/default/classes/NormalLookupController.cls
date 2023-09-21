public with sharing class NormalLookupController {
    public NormalLookupController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsByNameKeyword(String keyword) {
        system.System.debug('keyword'+ '\''+keyword+'\'');
        if(keyword != ''){
            String search =  keyword + '%';
            List<Account> matchingAccounts = [SELECT Id, Name FROM Account WHERE Name LIKE :search];
            return matchingAccounts;
        }
        return null;
       
    }
    public List<Opportunity> getOpportunitiesByAccountId(Id accountId) {
        List<Opportunity> matchingOpportunities =  [SELECT Id, Name, StageName, CloseDate FROM Opportunity WHERE AccountId = :accountId];
        return matchingOpportunities;
    }
    
}