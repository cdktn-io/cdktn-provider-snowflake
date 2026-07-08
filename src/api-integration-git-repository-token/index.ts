/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApiIntegrationGitRepositoryTokenConfig extends cdktn.TerraformMetaArguments {
  /**
  * When set to true, all authentication secrets are allowed to be used when authenticating to the git repository. Conflicts with `no_allowed_authentication_secrets` and `allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_token#all_allowed_authentication_secrets ApiIntegrationGitRepositoryToken#all_allowed_authentication_secrets}
  */
  readonly allAllowedAuthenticationSecrets?: boolean | cdktn.IResolvable;
  /**
  * A list of fully-qualified secret identifiers (database.schema.secret) allowed to be used when authenticating to the git repository. Conflicts with `all_allowed_authentication_secrets` and `no_allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_token#allowed_authentication_secrets ApiIntegrationGitRepositoryToken#allowed_authentication_secrets}
  */
  readonly allowedAuthenticationSecrets?: string[];
  /**
  * Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_token#api_allowed_prefixes ApiIntegrationGitRepositoryToken#api_allowed_prefixes}
  */
  readonly apiAllowedPrefixes: string[];
  /**
  * Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_token#api_blocked_prefixes ApiIntegrationGitRepositoryToken#api_blocked_prefixes}
  */
  readonly apiBlockedPrefixes?: string[];
  /**
  * Specifies a comment for the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_token#comment ApiIntegrationGitRepositoryToken#comment}
  */
  readonly comment?: string;
  /**
  * Specifies whether this API integration is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_token#enabled ApiIntegrationGitRepositoryToken#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_token#id ApiIntegrationGitRepositoryToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_token#name ApiIntegrationGitRepositoryToken#name}
  */
  readonly name: string;
  /**
  * When set to true, no authentication secrets are allowed to be used when authenticating to the git repository. Conflicts with `all_allowed_authentication_secrets` and `allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_token#no_allowed_authentication_secrets ApiIntegrationGitRepositoryToken#no_allowed_authentication_secrets}
  */
  readonly noAllowedAuthenticationSecrets?: boolean | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_token#timeouts ApiIntegrationGitRepositoryToken#timeouts}
  */
  readonly timeouts?: ApiIntegrationGitRepositoryTokenTimeouts;
}
export interface ApiIntegrationGitRepositoryTokenDescribeOutput {
}

export function apiIntegrationGitRepositoryTokenDescribeOutputToTerraform(struct?: ApiIntegrationGitRepositoryTokenDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function apiIntegrationGitRepositoryTokenDescribeOutputToHclTerraform(struct?: ApiIntegrationGitRepositoryTokenDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApiIntegrationGitRepositoryTokenDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiIntegrationGitRepositoryTokenDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_authentication_secrets - computed: true, optional: false, required: false
  public get allowedAuthenticationSecrets() {
    return this.getStringAttribute('allowed_authentication_secrets');
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
}

export class ApiIntegrationGitRepositoryTokenDescribeOutputList extends cdktn.ComplexList {

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
  public get(index: number): ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference {
    return new ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiIntegrationGitRepositoryTokenShowOutput {
}

export function apiIntegrationGitRepositoryTokenShowOutputToTerraform(struct?: ApiIntegrationGitRepositoryTokenShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function apiIntegrationGitRepositoryTokenShowOutputToHclTerraform(struct?: ApiIntegrationGitRepositoryTokenShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiIntegrationGitRepositoryTokenShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApiIntegrationGitRepositoryTokenShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiIntegrationGitRepositoryTokenShowOutput | undefined) {
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

export class ApiIntegrationGitRepositoryTokenShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): ApiIntegrationGitRepositoryTokenShowOutputOutputReference {
    return new ApiIntegrationGitRepositoryTokenShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiIntegrationGitRepositoryTokenTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_token#create ApiIntegrationGitRepositoryToken#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_token#delete ApiIntegrationGitRepositoryToken#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_token#read ApiIntegrationGitRepositoryToken#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_token#update ApiIntegrationGitRepositoryToken#update}
  */
  readonly update?: string;
}

export function apiIntegrationGitRepositoryTokenTimeoutsToTerraform(struct?: ApiIntegrationGitRepositoryTokenTimeouts | cdktn.IResolvable): any {
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


export function apiIntegrationGitRepositoryTokenTimeoutsToHclTerraform(struct?: ApiIntegrationGitRepositoryTokenTimeouts | cdktn.IResolvable): any {
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

export class ApiIntegrationGitRepositoryTokenTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiIntegrationGitRepositoryTokenTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApiIntegrationGitRepositoryTokenTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_token snowflake_api_integration_git_repository_token}
*/
export class ApiIntegrationGitRepositoryToken extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_api_integration_git_repository_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApiIntegrationGitRepositoryToken resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiIntegrationGitRepositoryToken to import
  * @param importFromId The id of the existing ApiIntegrationGitRepositoryToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiIntegrationGitRepositoryToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_api_integration_git_repository_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_token snowflake_api_integration_git_repository_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiIntegrationGitRepositoryTokenConfig
  */
  public constructor(scope: Construct, id: string, config: ApiIntegrationGitRepositoryTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_api_integration_git_repository_token',
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
    this._allAllowedAuthenticationSecrets = config.allAllowedAuthenticationSecrets;
    this._allowedAuthenticationSecrets = config.allowedAuthenticationSecrets;
    this._apiAllowedPrefixes = config.apiAllowedPrefixes;
    this._apiBlockedPrefixes = config.apiBlockedPrefixes;
    this._comment = config.comment;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._noAllowedAuthenticationSecrets = config.noAllowedAuthenticationSecrets;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_allowed_authentication_secrets - computed: false, optional: true, required: false
  private _allAllowedAuthenticationSecrets?: boolean | cdktn.IResolvable; 
  public get allAllowedAuthenticationSecrets() {
    return this.getBooleanAttribute('all_allowed_authentication_secrets');
  }
  public set allAllowedAuthenticationSecrets(value: boolean | cdktn.IResolvable) {
    this._allAllowedAuthenticationSecrets = value;
  }
  public resetAllAllowedAuthenticationSecrets() {
    this._allAllowedAuthenticationSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allAllowedAuthenticationSecretsInput() {
    return this._allAllowedAuthenticationSecrets;
  }

  // allowed_authentication_secrets - computed: false, optional: true, required: false
  private _allowedAuthenticationSecrets?: string[]; 
  public get allowedAuthenticationSecrets() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_authentication_secrets'));
  }
  public set allowedAuthenticationSecrets(value: string[]) {
    this._allowedAuthenticationSecrets = value;
  }
  public resetAllowedAuthenticationSecrets() {
    this._allowedAuthenticationSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAuthenticationSecretsInput() {
    return this._allowedAuthenticationSecrets;
  }

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
  private _describeOutput = new ApiIntegrationGitRepositoryTokenDescribeOutputList(this, "describe_output", false);
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

  // no_allowed_authentication_secrets - computed: false, optional: true, required: false
  private _noAllowedAuthenticationSecrets?: boolean | cdktn.IResolvable; 
  public get noAllowedAuthenticationSecrets() {
    return this.getBooleanAttribute('no_allowed_authentication_secrets');
  }
  public set noAllowedAuthenticationSecrets(value: boolean | cdktn.IResolvable) {
    this._noAllowedAuthenticationSecrets = value;
  }
  public resetNoAllowedAuthenticationSecrets() {
    this._noAllowedAuthenticationSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAllowedAuthenticationSecretsInput() {
    return this._noAllowedAuthenticationSecrets;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new ApiIntegrationGitRepositoryTokenShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiIntegrationGitRepositoryTokenTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiIntegrationGitRepositoryTokenTimeouts) {
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
      all_allowed_authentication_secrets: cdktn.booleanToTerraform(this._allAllowedAuthenticationSecrets),
      allowed_authentication_secrets: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedAuthenticationSecrets),
      api_allowed_prefixes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._apiAllowedPrefixes),
      api_blocked_prefixes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._apiBlockedPrefixes),
      comment: cdktn.stringToTerraform(this._comment),
      enabled: cdktn.booleanToTerraform(this._enabled),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      no_allowed_authentication_secrets: cdktn.booleanToTerraform(this._noAllowedAuthenticationSecrets),
      timeouts: apiIntegrationGitRepositoryTokenTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_allowed_authentication_secrets: {
        value: cdktn.booleanToHclTerraform(this._allAllowedAuthenticationSecrets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_authentication_secrets: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedAuthenticationSecrets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
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
      no_allowed_authentication_secrets: {
        value: cdktn.booleanToHclTerraform(this._noAllowedAuthenticationSecrets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: apiIntegrationGitRepositoryTokenTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiIntegrationGitRepositoryTokenTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
