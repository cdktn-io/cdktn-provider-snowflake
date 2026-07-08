/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_azure_api_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApiIntegrationAzureApiManagementConfig extends cdktn.TerraformMetaArguments {
  /**
  * Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_azure_api_management#api_allowed_prefixes ApiIntegrationAzureApiManagement#api_allowed_prefixes}
  */
  readonly apiAllowedPrefixes: string[];
  /**
  * Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_azure_api_management#api_blocked_prefixes ApiIntegrationAzureApiManagement#api_blocked_prefixes}
  */
  readonly apiBlockedPrefixes?: string[];
  /**
  * Specifies the API key (secret) that Snowflake uses to authenticate when making calls to the proxy service. Snowflake returns a masked value for this field in DESCRIBE output, so external changes to it cannot be detected. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_azure_api_management#api_key ApiIntegrationAzureApiManagement#api_key}
  */
  readonly apiKey?: string;
  /**
  * The 'Application (client) ID' of the Azure AD app for your Azure API Management instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_azure_api_management#azure_ad_application_id ApiIntegrationAzureApiManagement#azure_ad_application_id}
  */
  readonly azureAdApplicationId: string;
  /**
  * Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_azure_api_management#azure_tenant_id ApiIntegrationAzureApiManagement#azure_tenant_id}
  */
  readonly azureTenantId: string;
  /**
  * Specifies a comment for the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_azure_api_management#comment ApiIntegrationAzureApiManagement#comment}
  */
  readonly comment?: string;
  /**
  * Specifies whether this API integration is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_azure_api_management#enabled ApiIntegrationAzureApiManagement#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_azure_api_management#id ApiIntegrationAzureApiManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_azure_api_management#name ApiIntegrationAzureApiManagement#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_azure_api_management#timeouts ApiIntegrationAzureApiManagement#timeouts}
  */
  readonly timeouts?: ApiIntegrationAzureApiManagementTimeouts;
}
export interface ApiIntegrationAzureApiManagementDescribeOutput {
}

export function apiIntegrationAzureApiManagementDescribeOutputToTerraform(struct?: ApiIntegrationAzureApiManagementDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function apiIntegrationAzureApiManagementDescribeOutputToHclTerraform(struct?: ApiIntegrationAzureApiManagementDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiIntegrationAzureApiManagementDescribeOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiIntegrationAzureApiManagementDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiIntegrationAzureApiManagementDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_prefixes - computed: true, optional: false, required: false
  public get allowedPrefixes() {
    return this.getListAttribute('allowed_prefixes');
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // api_provider - computed: true, optional: false, required: false
  public get apiProvider() {
    return this.getStringAttribute('api_provider');
  }

  // azure_ad_application_id - computed: true, optional: false, required: false
  public get azureAdApplicationId() {
    return this.getStringAttribute('azure_ad_application_id');
  }

  // azure_consent_url - computed: true, optional: false, required: false
  public get azureConsentUrl() {
    return this.getStringAttribute('azure_consent_url');
  }

  // azure_multi_tenant_app_name - computed: true, optional: false, required: false
  public get azureMultiTenantAppName() {
    return this.getStringAttribute('azure_multi_tenant_app_name');
  }

  // azure_tenant_id - computed: true, optional: false, required: false
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }

  // blocked_prefixes - computed: true, optional: false, required: false
  public get blockedPrefixes() {
    return this.getListAttribute('blocked_prefixes');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class ApiIntegrationAzureApiManagementDescribeOutputList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiIntegrationAzureApiManagementDescribeOutputOutputReference {
    return new ApiIntegrationAzureApiManagementDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiIntegrationAzureApiManagementShowOutput {
}

export function apiIntegrationAzureApiManagementShowOutputToTerraform(struct?: ApiIntegrationAzureApiManagementShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function apiIntegrationAzureApiManagementShowOutputToHclTerraform(struct?: ApiIntegrationAzureApiManagementShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiIntegrationAzureApiManagementShowOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiIntegrationAzureApiManagementShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiIntegrationAzureApiManagementShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_type - computed: true, optional: false, required: false
  public get apiType() {
    return this.getStringAttribute('api_type');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ApiIntegrationAzureApiManagementShowOutputList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiIntegrationAzureApiManagementShowOutputOutputReference {
    return new ApiIntegrationAzureApiManagementShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiIntegrationAzureApiManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_azure_api_management#create ApiIntegrationAzureApiManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_azure_api_management#delete ApiIntegrationAzureApiManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_azure_api_management#read ApiIntegrationAzureApiManagement#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_azure_api_management#update ApiIntegrationAzureApiManagement#update}
  */
  readonly update?: string;
}

export function apiIntegrationAzureApiManagementTimeoutsToTerraform(struct?: ApiIntegrationAzureApiManagementTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    read: cdktn.stringToTerraform(struct!.read),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function apiIntegrationAzureApiManagementTimeoutsToHclTerraform(struct?: ApiIntegrationAzureApiManagementTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiIntegrationAzureApiManagementTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiIntegrationAzureApiManagementTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiIntegrationAzureApiManagementTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_azure_api_management snowflake_api_integration_azure_api_management}
*/
export class ApiIntegrationAzureApiManagement extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_api_integration_azure_api_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApiIntegrationAzureApiManagement resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiIntegrationAzureApiManagement to import
  * @param importFromId The id of the existing ApiIntegrationAzureApiManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_azure_api_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiIntegrationAzureApiManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_api_integration_azure_api_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_azure_api_management snowflake_api_integration_azure_api_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiIntegrationAzureApiManagementConfig
  */
  public constructor(scope: Construct, id: string, config: ApiIntegrationAzureApiManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_api_integration_azure_api_management',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.18.0',
        providerVersionConstraint: ' ~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiAllowedPrefixes = config.apiAllowedPrefixes;
    this._apiBlockedPrefixes = config.apiBlockedPrefixes;
    this._apiKey = config.apiKey;
    this._azureAdApplicationId = config.azureAdApplicationId;
    this._azureTenantId = config.azureTenantId;
    this._comment = config.comment;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_allowed_prefixes - computed: false, optional: false, required: true
  private _apiAllowedPrefixes?: string[]; 
  public get apiAllowedPrefixes() {
    return this.getListAttribute('api_allowed_prefixes');
  }
  public set apiAllowedPrefixes(value: string[]) {
    this._apiAllowedPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAllowedPrefixesInput() {
    return this._apiAllowedPrefixes;
  }

  // api_blocked_prefixes - computed: false, optional: true, required: false
  private _apiBlockedPrefixes?: string[]; 
  public get apiBlockedPrefixes() {
    return this.getListAttribute('api_blocked_prefixes');
  }
  public set apiBlockedPrefixes(value: string[]) {
    this._apiBlockedPrefixes = value;
  }
  public resetApiBlockedPrefixes() {
    this._apiBlockedPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiBlockedPrefixesInput() {
    return this._apiBlockedPrefixes;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // azure_ad_application_id - computed: false, optional: false, required: true
  private _azureAdApplicationId?: string; 
  public get azureAdApplicationId() {
    return this.getStringAttribute('azure_ad_application_id');
  }
  public set azureAdApplicationId(value: string) {
    this._azureAdApplicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdApplicationIdInput() {
    return this._azureAdApplicationId;
  }

  // azure_tenant_id - computed: false, optional: false, required: true
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string) {
    this._azureTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new ApiIntegrationAzureApiManagementDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fully_qualified_name - computed: true, optional: false, required: false
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new ApiIntegrationAzureApiManagementShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiIntegrationAzureApiManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiIntegrationAzureApiManagementTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_allowed_prefixes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._apiAllowedPrefixes),
      api_blocked_prefixes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._apiBlockedPrefixes),
      api_key: cdktn.stringToTerraform(this._apiKey),
      azure_ad_application_id: cdktn.stringToTerraform(this._azureAdApplicationId),
      azure_tenant_id: cdktn.stringToTerraform(this._azureTenantId),
      comment: cdktn.stringToTerraform(this._comment),
      enabled: cdktn.booleanToTerraform(this._enabled),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      timeouts: apiIntegrationAzureApiManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_allowed_prefixes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._apiAllowedPrefixes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      api_blocked_prefixes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._apiBlockedPrefixes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      api_key: {
        value: cdktn.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_ad_application_id: {
        value: cdktn.stringToHclTerraform(this._azureAdApplicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_tenant_id: {
        value: cdktn.stringToHclTerraform(this._azureTenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktn.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: apiIntegrationAzureApiManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiIntegrationAzureApiManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
