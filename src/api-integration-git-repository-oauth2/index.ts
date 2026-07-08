/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApiIntegrationGitRepositoryOauth2Config extends cdktn.TerraformMetaArguments {
  /**
  * Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#api_allowed_prefixes ApiIntegrationGitRepositoryOauth2#api_allowed_prefixes}
  */
  readonly apiAllowedPrefixes: string[];
  /**
  * Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#api_blocked_prefixes ApiIntegrationGitRepositoryOauth2#api_blocked_prefixes}
  */
  readonly apiBlockedPrefixes?: string[];
  /**
  * Specifies a comment for the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#comment ApiIntegrationGitRepositoryOauth2#comment}
  */
  readonly comment?: string;
  /**
  * Specifies whether this API integration is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#enabled ApiIntegrationGitRepositoryOauth2#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#id ApiIntegrationGitRepositoryOauth2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#name ApiIntegrationGitRepositoryOauth2#name}
  */
  readonly name: string;
  /**
  * Specifies the validity period (in seconds) for the OAuth 2.0 access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#oauth_access_token_validity ApiIntegrationGitRepositoryOauth2#oauth_access_token_validity}
  */
  readonly oauthAccessTokenValidity?: number;
  /**
  * Specifies a list of scopes to use when making a request from the OAuth by a role with USAGE on the integration. Valid values are (case-insensitive): `read_api` | `read_repository` | `write_repository`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#oauth_allowed_scopes ApiIntegrationGitRepositoryOauth2#oauth_allowed_scopes}
  */
  readonly oauthAllowedScopes?: string[];
  /**
  * The OAuth 2.0 authorization endpoint for the Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#oauth_authorization_endpoint ApiIntegrationGitRepositoryOauth2#oauth_authorization_endpoint}
  */
  readonly oauthAuthorizationEndpoint: string;
  /**
  * The client ID for the OAuth 2.0 application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#oauth_client_id ApiIntegrationGitRepositoryOauth2#oauth_client_id}
  */
  readonly oauthClientId: string;
  /**
  * The client secret for the OAuth 2.0 application. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#oauth_client_secret ApiIntegrationGitRepositoryOauth2#oauth_client_secret}
  */
  readonly oauthClientSecret: string;
  /**
  * Specifies the validity period (in seconds) for the OAuth 2.0 refresh token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#oauth_refresh_token_validity ApiIntegrationGitRepositoryOauth2#oauth_refresh_token_validity}
  */
  readonly oauthRefreshTokenValidity?: number;
  /**
  * The OAuth 2.0 token endpoint for the Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#oauth_token_endpoint ApiIntegrationGitRepositoryOauth2#oauth_token_endpoint}
  */
  readonly oauthTokenEndpoint: string;
  /**
  * Specifies the username to authenticate with the Git repository using OAuth 2.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#oauth_username ApiIntegrationGitRepositoryOauth2#oauth_username}
  */
  readonly oauthUsername?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#timeouts ApiIntegrationGitRepositoryOauth2#timeouts}
  */
  readonly timeouts?: ApiIntegrationGitRepositoryOauth2Timeouts;
}
export interface ApiIntegrationGitRepositoryOauth2DescribeOutput {
}

export function apiIntegrationGitRepositoryOauth2DescribeOutputToTerraform(struct?: ApiIntegrationGitRepositoryOauth2DescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function apiIntegrationGitRepositoryOauth2DescribeOutputToHclTerraform(struct?: ApiIntegrationGitRepositoryOauth2DescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApiIntegrationGitRepositoryOauth2DescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiIntegrationGitRepositoryOauth2DescribeOutput | undefined) {
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

  // oauth_authorization_endpoint - computed: true, optional: false, required: false
  public get oauthAuthorizationEndpoint() {
    return this.getStringAttribute('oauth_authorization_endpoint');
  }

  // oauth_client_id - computed: true, optional: false, required: false
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
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

export class ApiIntegrationGitRepositoryOauth2DescribeOutputList extends cdktn.ComplexList {

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
  public get(index: number): ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference {
    return new ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiIntegrationGitRepositoryOauth2ShowOutput {
}

export function apiIntegrationGitRepositoryOauth2ShowOutputToTerraform(struct?: ApiIntegrationGitRepositoryOauth2ShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function apiIntegrationGitRepositoryOauth2ShowOutputToHclTerraform(struct?: ApiIntegrationGitRepositoryOauth2ShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApiIntegrationGitRepositoryOauth2ShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiIntegrationGitRepositoryOauth2ShowOutput | undefined) {
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

export class ApiIntegrationGitRepositoryOauth2ShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference {
    return new ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiIntegrationGitRepositoryOauth2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#create ApiIntegrationGitRepositoryOauth2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#delete ApiIntegrationGitRepositoryOauth2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#read ApiIntegrationGitRepositoryOauth2#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#update ApiIntegrationGitRepositoryOauth2#update}
  */
  readonly update?: string;
}

export function apiIntegrationGitRepositoryOauth2TimeoutsToTerraform(struct?: ApiIntegrationGitRepositoryOauth2Timeouts | cdktn.IResolvable): any {
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


export function apiIntegrationGitRepositoryOauth2TimeoutsToHclTerraform(struct?: ApiIntegrationGitRepositoryOauth2Timeouts | cdktn.IResolvable): any {
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

export class ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiIntegrationGitRepositoryOauth2Timeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApiIntegrationGitRepositoryOauth2Timeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2 snowflake_api_integration_git_repository_oauth2}
*/
export class ApiIntegrationGitRepositoryOauth2 extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_api_integration_git_repository_oauth2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApiIntegrationGitRepositoryOauth2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiIntegrationGitRepositoryOauth2 to import
  * @param importFromId The id of the existing ApiIntegrationGitRepositoryOauth2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiIntegrationGitRepositoryOauth2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_api_integration_git_repository_oauth2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_oauth2 snowflake_api_integration_git_repository_oauth2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiIntegrationGitRepositoryOauth2Config
  */
  public constructor(scope: Construct, id: string, config: ApiIntegrationGitRepositoryOauth2Config) {
    super(scope, id, {
      terraformResourceType: 'snowflake_api_integration_git_repository_oauth2',
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
    this._oauthAccessTokenValidity = config.oauthAccessTokenValidity;
    this._oauthAllowedScopes = config.oauthAllowedScopes;
    this._oauthAuthorizationEndpoint = config.oauthAuthorizationEndpoint;
    this._oauthClientId = config.oauthClientId;
    this._oauthClientSecret = config.oauthClientSecret;
    this._oauthRefreshTokenValidity = config.oauthRefreshTokenValidity;
    this._oauthTokenEndpoint = config.oauthTokenEndpoint;
    this._oauthUsername = config.oauthUsername;
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
  private _describeOutput = new ApiIntegrationGitRepositoryOauth2DescribeOutputList(this, "describe_output", false);
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

  // oauth_access_token_validity - computed: false, optional: true, required: false
  private _oauthAccessTokenValidity?: number; 
  public get oauthAccessTokenValidity() {
    return this.getNumberAttribute('oauth_access_token_validity');
  }
  public set oauthAccessTokenValidity(value: number) {
    this._oauthAccessTokenValidity = value;
  }
  public resetOauthAccessTokenValidity() {
    this._oauthAccessTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAccessTokenValidityInput() {
    return this._oauthAccessTokenValidity;
  }

  // oauth_allowed_scopes - computed: false, optional: true, required: false
  private _oauthAllowedScopes?: string[]; 
  public get oauthAllowedScopes() {
    return this.getListAttribute('oauth_allowed_scopes');
  }
  public set oauthAllowedScopes(value: string[]) {
    this._oauthAllowedScopes = value;
  }
  public resetOauthAllowedScopes() {
    this._oauthAllowedScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAllowedScopesInput() {
    return this._oauthAllowedScopes;
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

  // oauth_username - computed: false, optional: true, required: false
  private _oauthUsername?: string; 
  public get oauthUsername() {
    return this.getStringAttribute('oauth_username');
  }
  public set oauthUsername(value: string) {
    this._oauthUsername = value;
  }
  public resetOauthUsername() {
    this._oauthUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthUsernameInput() {
    return this._oauthUsername;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new ApiIntegrationGitRepositoryOauth2ShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiIntegrationGitRepositoryOauth2Timeouts) {
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
      oauth_access_token_validity: cdktn.numberToTerraform(this._oauthAccessTokenValidity),
      oauth_allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._oauthAllowedScopes),
      oauth_authorization_endpoint: cdktn.stringToTerraform(this._oauthAuthorizationEndpoint),
      oauth_client_id: cdktn.stringToTerraform(this._oauthClientId),
      oauth_client_secret: cdktn.stringToTerraform(this._oauthClientSecret),
      oauth_refresh_token_validity: cdktn.numberToTerraform(this._oauthRefreshTokenValidity),
      oauth_token_endpoint: cdktn.stringToTerraform(this._oauthTokenEndpoint),
      oauth_username: cdktn.stringToTerraform(this._oauthUsername),
      timeouts: apiIntegrationGitRepositoryOauth2TimeoutsToTerraform(this._timeouts.internalValue),
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
      oauth_access_token_validity: {
        value: cdktn.numberToHclTerraform(this._oauthAccessTokenValidity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oauth_allowed_scopes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._oauthAllowedScopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      oauth_authorization_endpoint: {
        value: cdktn.stringToHclTerraform(this._oauthAuthorizationEndpoint),
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
      oauth_username: {
        value: cdktn.stringToHclTerraform(this._oauthUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: apiIntegrationGitRepositoryOauth2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiIntegrationGitRepositoryOauth2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
