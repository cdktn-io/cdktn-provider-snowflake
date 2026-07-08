/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApiIntegrationExternalMcpOauth2Config extends cdktn.TerraformMetaArguments {
  /**
  * Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2#api_allowed_prefixes ApiIntegrationExternalMcpOauth2#api_allowed_prefixes}
  */
  readonly apiAllowedPrefixes: string[];
  /**
  * Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2#api_blocked_prefixes ApiIntegrationExternalMcpOauth2#api_blocked_prefixes}
  */
  readonly apiBlockedPrefixes?: string[];
  /**
  * Specifies a comment for the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2#comment ApiIntegrationExternalMcpOauth2#comment}
  */
  readonly comment?: string;
  /**
  * Specifies whether this API integration is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2#enabled ApiIntegrationExternalMcpOauth2#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2#id ApiIntegrationExternalMcpOauth2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2#name ApiIntegrationExternalMcpOauth2#name}
  */
  readonly name: string;
  /**
  * Specifies the OAuth 2.0 authorization endpoint URL for the MCP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2#oauth_authorization_endpoint ApiIntegrationExternalMcpOauth2#oauth_authorization_endpoint}
  */
  readonly oauthAuthorizationEndpoint: string;
  /**
  * Specifies the OAuth 2.0 client authentication method. Valid values are (case-insensitive): `CLIENT_SECRET_BASIC` | `CLIENT_SECRET_POST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_auth_method ApiIntegrationExternalMcpOauth2#oauth_client_auth_method}
  */
  readonly oauthClientAuthMethod?: string;
  /**
  * Specifies the OAuth 2.0 client ID for the MCP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_id ApiIntegrationExternalMcpOauth2#oauth_client_id}
  */
  readonly oauthClientId: string;
  /**
  * Specifies the OAuth 2.0 client secret for the MCP server. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_secret ApiIntegrationExternalMcpOauth2#oauth_client_secret}
  */
  readonly oauthClientSecret: string;
  /**
  * Specifies the validity period (in seconds) for refresh tokens issued by the MCP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2#oauth_refresh_token_validity ApiIntegrationExternalMcpOauth2#oauth_refresh_token_validity}
  */
  readonly oauthRefreshTokenValidity?: number;
  /**
  * Specifies the OAuth 2.0 token endpoint URL for the MCP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2#oauth_token_endpoint ApiIntegrationExternalMcpOauth2#oauth_token_endpoint}
  */
  readonly oauthTokenEndpoint: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2#timeouts ApiIntegrationExternalMcpOauth2#timeouts}
  */
  readonly timeouts?: ApiIntegrationExternalMcpOauth2Timeouts;
}
export interface ApiIntegrationExternalMcpOauth2DescribeOutput {
}

export function apiIntegrationExternalMcpOauth2DescribeOutputToTerraform(struct?: ApiIntegrationExternalMcpOauth2DescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function apiIntegrationExternalMcpOauth2DescribeOutputToHclTerraform(struct?: ApiIntegrationExternalMcpOauth2DescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApiIntegrationExternalMcpOauth2DescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiIntegrationExternalMcpOauth2DescribeOutput | undefined) {
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

  // api_provider - computed: true, optional: false, required: false
  public get apiProvider() {
    return this.getStringAttribute('api_provider');
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

  // oauth_access_token_validity - computed: true, optional: false, required: false
  public get oauthAccessTokenValidity() {
    return this.getNumberAttribute('oauth_access_token_validity');
  }

  // oauth_allowed_scopes - computed: true, optional: false, required: false
  public get oauthAllowedScopes() {
    return this.getListAttribute('oauth_allowed_scopes');
  }

  // oauth_assertion_issuer - computed: true, optional: false, required: false
  public get oauthAssertionIssuer() {
    return this.getStringAttribute('oauth_assertion_issuer');
  }

  // oauth_authorization_endpoint - computed: true, optional: false, required: false
  public get oauthAuthorizationEndpoint() {
    return this.getStringAttribute('oauth_authorization_endpoint');
  }

  // oauth_client_auth_method - computed: true, optional: false, required: false
  public get oauthClientAuthMethod() {
    return this.getStringAttribute('oauth_client_auth_method');
  }

  // oauth_client_id - computed: true, optional: false, required: false
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }

  // oauth_grant - computed: true, optional: false, required: false
  public get oauthGrant() {
    return this.getStringAttribute('oauth_grant');
  }

  // oauth_refresh_token_validity - computed: true, optional: false, required: false
  public get oauthRefreshTokenValidity() {
    return this.getNumberAttribute('oauth_refresh_token_validity');
  }

  // oauth_token_endpoint - computed: true, optional: false, required: false
  public get oauthTokenEndpoint() {
    return this.getStringAttribute('oauth_token_endpoint');
  }

  // oauth_username - computed: true, optional: false, required: false
  public get oauthUsername() {
    return this.getStringAttribute('oauth_username');
  }

  // user_auth_type - computed: true, optional: false, required: false
  public get userAuthType() {
    return this.getStringAttribute('user_auth_type');
  }
}

export class ApiIntegrationExternalMcpOauth2DescribeOutputList extends cdktn.ComplexList {

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
  public get(index: number): ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference {
    return new ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiIntegrationExternalMcpOauth2ShowOutput {
}

export function apiIntegrationExternalMcpOauth2ShowOutputToTerraform(struct?: ApiIntegrationExternalMcpOauth2ShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function apiIntegrationExternalMcpOauth2ShowOutputToHclTerraform(struct?: ApiIntegrationExternalMcpOauth2ShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiIntegrationExternalMcpOauth2ShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApiIntegrationExternalMcpOauth2ShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiIntegrationExternalMcpOauth2ShowOutput | undefined) {
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

export class ApiIntegrationExternalMcpOauth2ShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): ApiIntegrationExternalMcpOauth2ShowOutputOutputReference {
    return new ApiIntegrationExternalMcpOauth2ShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiIntegrationExternalMcpOauth2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2#create ApiIntegrationExternalMcpOauth2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2#delete ApiIntegrationExternalMcpOauth2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2#read ApiIntegrationExternalMcpOauth2#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2#update ApiIntegrationExternalMcpOauth2#update}
  */
  readonly update?: string;
}

export function apiIntegrationExternalMcpOauth2TimeoutsToTerraform(struct?: ApiIntegrationExternalMcpOauth2Timeouts | cdktn.IResolvable): any {
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


export function apiIntegrationExternalMcpOauth2TimeoutsToHclTerraform(struct?: ApiIntegrationExternalMcpOauth2Timeouts | cdktn.IResolvable): any {
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

export class ApiIntegrationExternalMcpOauth2TimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiIntegrationExternalMcpOauth2Timeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApiIntegrationExternalMcpOauth2Timeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2 snowflake_api_integration_external_mcp_oauth2}
*/
export class ApiIntegrationExternalMcpOauth2 extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_api_integration_external_mcp_oauth2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApiIntegrationExternalMcpOauth2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiIntegrationExternalMcpOauth2 to import
  * @param importFromId The id of the existing ApiIntegrationExternalMcpOauth2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiIntegrationExternalMcpOauth2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_api_integration_external_mcp_oauth2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_external_mcp_oauth2 snowflake_api_integration_external_mcp_oauth2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiIntegrationExternalMcpOauth2Config
  */
  public constructor(scope: Construct, id: string, config: ApiIntegrationExternalMcpOauth2Config) {
    super(scope, id, {
      terraformResourceType: 'snowflake_api_integration_external_mcp_oauth2',
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
    this._comment = config.comment;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._oauthAuthorizationEndpoint = config.oauthAuthorizationEndpoint;
    this._oauthClientAuthMethod = config.oauthClientAuthMethod;
    this._oauthClientId = config.oauthClientId;
    this._oauthClientSecret = config.oauthClientSecret;
    this._oauthRefreshTokenValidity = config.oauthRefreshTokenValidity;
    this._oauthTokenEndpoint = config.oauthTokenEndpoint;
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
  private _describeOutput = new ApiIntegrationExternalMcpOauth2DescribeOutputList(this, "describe_output", false);
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

  // oauth_authorization_endpoint - computed: false, optional: false, required: true
  private _oauthAuthorizationEndpoint?: string; 
  public get oauthAuthorizationEndpoint() {
    return this.getStringAttribute('oauth_authorization_endpoint');
  }
  public set oauthAuthorizationEndpoint(value: string) {
    this._oauthAuthorizationEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAuthorizationEndpointInput() {
    return this._oauthAuthorizationEndpoint;
  }

  // oauth_client_auth_method - computed: false, optional: true, required: false
  private _oauthClientAuthMethod?: string; 
  public get oauthClientAuthMethod() {
    return this.getStringAttribute('oauth_client_auth_method');
  }
  public set oauthClientAuthMethod(value: string) {
    this._oauthClientAuthMethod = value;
  }
  public resetOauthClientAuthMethod() {
    this._oauthClientAuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientAuthMethodInput() {
    return this._oauthClientAuthMethod;
  }

  // oauth_client_id - computed: false, optional: false, required: true
  private _oauthClientId?: string; 
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }
  public set oauthClientId(value: string) {
    this._oauthClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientIdInput() {
    return this._oauthClientId;
  }

  // oauth_client_secret - computed: false, optional: false, required: true
  private _oauthClientSecret?: string; 
  public get oauthClientSecret() {
    return this.getStringAttribute('oauth_client_secret');
  }
  public set oauthClientSecret(value: string) {
    this._oauthClientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientSecretInput() {
    return this._oauthClientSecret;
  }

  // oauth_refresh_token_validity - computed: false, optional: true, required: false
  private _oauthRefreshTokenValidity?: number; 
  public get oauthRefreshTokenValidity() {
    return this.getNumberAttribute('oauth_refresh_token_validity');
  }
  public set oauthRefreshTokenValidity(value: number) {
    this._oauthRefreshTokenValidity = value;
  }
  public resetOauthRefreshTokenValidity() {
    this._oauthRefreshTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRefreshTokenValidityInput() {
    return this._oauthRefreshTokenValidity;
  }

  // oauth_token_endpoint - computed: false, optional: false, required: true
  private _oauthTokenEndpoint?: string; 
  public get oauthTokenEndpoint() {
    return this.getStringAttribute('oauth_token_endpoint');
  }
  public set oauthTokenEndpoint(value: string) {
    this._oauthTokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenEndpointInput() {
    return this._oauthTokenEndpoint;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new ApiIntegrationExternalMcpOauth2ShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiIntegrationExternalMcpOauth2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiIntegrationExternalMcpOauth2Timeouts) {
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
      comment: cdktn.stringToTerraform(this._comment),
      enabled: cdktn.booleanToTerraform(this._enabled),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      oauth_authorization_endpoint: cdktn.stringToTerraform(this._oauthAuthorizationEndpoint),
      oauth_client_auth_method: cdktn.stringToTerraform(this._oauthClientAuthMethod),
      oauth_client_id: cdktn.stringToTerraform(this._oauthClientId),
      oauth_client_secret: cdktn.stringToTerraform(this._oauthClientSecret),
      oauth_refresh_token_validity: cdktn.numberToTerraform(this._oauthRefreshTokenValidity),
      oauth_token_endpoint: cdktn.stringToTerraform(this._oauthTokenEndpoint),
      timeouts: apiIntegrationExternalMcpOauth2TimeoutsToTerraform(this._timeouts.internalValue),
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
      oauth_authorization_endpoint: {
        value: cdktn.stringToHclTerraform(this._oauthAuthorizationEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_auth_method: {
        value: cdktn.stringToHclTerraform(this._oauthClientAuthMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_id: {
        value: cdktn.stringToHclTerraform(this._oauthClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_secret: {
        value: cdktn.stringToHclTerraform(this._oauthClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_refresh_token_validity: {
        value: cdktn.numberToHclTerraform(this._oauthRefreshTokenValidity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oauth_token_endpoint: {
        value: cdktn.stringToHclTerraform(this._oauthTokenEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: apiIntegrationExternalMcpOauth2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiIntegrationExternalMcpOauth2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
