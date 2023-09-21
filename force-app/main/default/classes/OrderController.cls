public with sharing class OrderController {
    public OrderController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<order> getOrders() {
        
            List<order> orders = [SELECT Id, Name, OrderNumber, Status, Account.Name   FROM Order];
            return orders;
    }
}