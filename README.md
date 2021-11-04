# Infrasctructure as Code: Azure Date WebApp using Terraform

This sample demonstrates how to manage your Azure websites using a node.js client.

**On this page**

- [Prerequisites](#prereqs)
- [How to run](#run)


<a id="prereqs"></a>

## Prerequisites

1. If you don't already have it, [install terraform](https://www.terraform.io/downloads.html) 
   - If you would like to test the functionality locally, you can also [install nodejs](https://nodejs.org/en/download/). The code will run on the server after deployment, so this isn't 100% necessary

2. Clone the repository.

    ```git bash
    git clone https://github.com:Azure-Samples/app-service-web-nodejs-manage.git
    ```

3. If you don't have a service principal, create an Azure service principal either through
    [Azure CLI](https://azure.microsoft.com/documentation/articles/resource-group-authenticate-service-principal-cli/),
    [PowerShell](https://azure.microsoft.com/documentation/articles/resource-group-authenticate-service-principal/)
    or [the portal](https://azure.microsoft.com/documentation/articles/resource-group-create-service-principal-portal/).

4. Get the following environment variables using the information from the service principle that you created.
   1. [Get tenant and App ID values for signing in](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#get-tenant-and-app-id-values-for-signing-in)
      1. From here you will be able to grab the `arm_principal` and `tenant_id` parameters for below
   2. For this guide we will use [Option 2: Create a new application secret](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#option-2-create-a-new-application-secret)
      1. This will be your `arm_password` for below
5. Make sure your created service principal has **Contributor** permissions over your target Subscription. Follow this guide to [Assign the application to the right role](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#assign-a-role-to-the-application).

<a id="prereqs"></a>

## How to run

1. After the prereqs are met, move to the terraform folder

```git bash
     cd .\terraform\
```

2. Make your own **terraform.tfvars** file in this directory, using the **terraform.tfvars.example** file as a template.

### Parameters

| Name                  | Description                               |
| ----------------------|-------------------------------------------| 
| `arm_principal`       | Service Principal Application (client) ID |
| `arm_password`        | Service Principal Secret value            | 
| `arm_subscription_id` | Target subscription ID                    |  
| `tenant_id`           | Target Tenant ID                          | 
## Links used

- [Create App Service app using a Terraform template](https://docs.microsoft.com/en-us/azure/app-service/provision-resource-terraform)
- [Forked this Azure Samples Repo to add to this one](https://github.com/Azure-Samples/nodejs-docs-hello-world)
- [Handling the JSON output](https://stackoverflow.com/questions/19696240/proper-way-to-return-json-using-node-or-express)
- [Working out DateTime](https://websolutionstuff.com/post/how-to-get-current-date-and-time-in-node-js)
