##################################################################################
# VARIABLES
##################################################################################

variable "arm_subscription_id" {
    type = string
}
variable "arm_principal" {
    type = string
}
variable "arm_password" {
    type = string
}
variable "tenant_id" {
    type = string
}
variable "myResourceGroupName" {
    type = string
    default = "myResourceGroup"
}
variable "myWebAppName" {
    type = string
    default = "webapp"
}
variable "myLocation" {
  type = string
  default = "southcentralus"
}