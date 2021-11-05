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

| Name                  |Required| Description                               |
| ----------------------|--------|-------------------------------------------| 
| `arm_principal`       | Yes    | Service Principal Application (client) ID |
| `arm_password`        | Yes    | Service Principal Secret value            | 
| `arm_subscription_id` | Yes    | Target subscription ID                    |  
| `tenant_id`           | Yes    | Target Tenant ID                          |
| `myResourceGroupName` | No     | Optional ResourcGroup Name. Defaults to **myResourceGroup** if not defined in your .tfvars file | 
| `myWebAppName`        | No     | Optional WebApp Name. Defaults to **webapp** if not defined in your .tfvars file | 
| `myLocation`          | No     | Optional location name. Defaults to **southcentralus** if not defined in your .tfvars file | 

NOTE: location codes for current azure regions can be found using the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) Command below:

```bash
az account list-locations -o table
```

Both the **DisplayName** and **Name** outputs from this list will work for the `myLocation` paramater 


3. Initialize terraform

```bash
terraform init
```

4. Run terraform plan to see what is getting deployed

```bash
terraform plan -out tfplan
```

5. Run terraform apply to deploy the web app

```bash
terraform apply "tfplan"
```

6. If the plan is applied properly, you should see two outputs. One to show the repo was applied correctly as the source control for the web app, and another is the hostname to see the result.

```bash
    Outputs:

    source_control = tolist([
    {
        "branch" = "main"
        "manual_integration" = true
        "repo_url" = "https://github.com/kevaschmim/IAC-Azure-WebApp"
        "rollback_enabled" = false
        "use_mercurial" = false
    },
    ])
    web_app_dns = "https://<your_webapp_name>.azurewebsites.net"
```

7. Clicking on (or **curl**ing) the **web_app_dns** endpoint should show the desired result for the current UTC date.

## Methodology explaination

Like any good new tech project starts, I began by googling the items needed. I knew there would be a basic web app template I could use somewhere, and found one pretty quickly.

After following the first tutorial link to deploy the basic web app I worked my way through the criteria to add the necessary components. Originally the source control of the web app was using the **node.js** template I linked below, and because I knew it would be needed to be edited I forked it into my repositories and worked on the **index.js** from there. I realized I could keep the same files all in one repo so I ported them over to this one so the terraform deployment and source files for the web app could be updated in the same place.

## Known issues

- I tried to get the web-app's scm_type set to "Local Git" 

## Future Enhancements

- I would like to update this to use an asyncronous call so that the time continually updates to the current time, like this website I found to double check I was getting the right time 

## Links used

- [Create App Service app using a Terraform template](https://docs.microsoft.com/en-us/azure/app-service/provision-resource-terraform)
- [Forked this Azure Samples Repo to add to this one](https://github.com/Azure-Samples/nodejs-docs-hello-world)
- [Handling the JSON output](https://stackoverflow.com/questions/19696240/proper-way-to-return-json-using-node-or-express)
- [Working out DateTime](https://websolutionstuff.com/post/how-to-get-current-date-and-time-in-node-js)
