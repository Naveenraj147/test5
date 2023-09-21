public with sharing class LookupController {
    public LookupController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<sObject> findRecords(String objectApiName, String fieldName, String searchValue){
      String key = '%' + searchValue + '%';
      String query = 'Select Id, '+ fieldName + ' From ' + objectApiName + ' Where ' + fieldName + ' Like :key';
      system.debug(query);
      List<sObject> objList = Database.query(query);
      return objList;
    }

    @AuraEnabled(cacheable=true)
    public static List<sObject> findRecordsByAcc(String objectApiName, String fieldName, String searchValue, String accId){
      String key = '%' + searchValue + '%';
      String query = 'Select Id, '+ fieldName + ' From ' + objectApiName + ' Where ' + fieldName + ' Like :key' + ' AND accountId = '+'\''+accId+'\'';
      system.debug(query);
      List<sObject> objList = Database.query(query);
      return objList;
    }
/*
    @AuraEnabled(cacheable=true)
    public static List<sObject> findRecordsByAcc(String objectApiName, String fieldName, String accId){
      String query = 'Select Id, '+ fieldName + ' From ' + objectApiName + ' Where accountId = '+'\''+accId+'\'';
      system.debug(query);
      List<sObject> objList = Database.query(query);
      return objList;
    }*/

    @AuraEnabled(cacheable=true)
    public static string testWire(){
     return 'Wire Run';
    }
}