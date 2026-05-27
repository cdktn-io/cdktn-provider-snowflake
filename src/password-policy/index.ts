/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PasswordPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Adds a comment or overwrites an existing comment for the password policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#comment PasswordPolicy#comment}
  */
  readonly comment?: string;
  /**
  * The database this password policy belongs to. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#database PasswordPolicy#database}
  */
  readonly database: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of the most recent passwords that Snowflake stores. These stored passwords cannot be repeated when a user updates their password value. The current password value does not count towards the history. When you increase the history value, Snowflake saves the previous values. When you decrease the value, Snowflake saves the stored values up to that value that is set. For example, if the history value is 8 and you change the history value to 3, Snowflake stores the most recent 3 passwords and deletes the 5 older password values from the history.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#history PasswordPolicy#history}
  */
  readonly history?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#id PasswordPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Default: `false`) Prevent overwriting a previous password policy with the same name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#if_not_exists PasswordPolicy#if_not_exists}
  */
  readonly ifNotExists?: boolean | cdktn.IResolvable;
  /**
  * Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#lockout_time_mins PasswordPolicy#lockout_time_mins}
  */
  readonly lockoutTimeMins?: number;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the maximum number of days before the password must be changed. A value of zero (i.e. 0) indicates that the password does not need to be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#max_age_days PasswordPolicy#max_age_days}
  */
  readonly maxAgeDays?: number;
  /**
  * Specifies the maximum number of characters the password must contain. This number must be greater than or equal to the sum of PASSWORD_MIN_LENGTH, PASSWORD_MIN_UPPER_CASE_CHARS, and PASSWORD_MIN_LOWER_CASE_CHARS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#max_length PasswordPolicy#max_length}
  */
  readonly maxLength?: number;
  /**
  * Specifies the maximum number of attempts to enter a password before being locked out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#max_retries PasswordPolicy#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of days the user must wait before a recently changed password can be changed again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_age_days PasswordPolicy#min_age_days}
  */
  readonly minAgeDays?: number;
  /**
  * Specifies the minimum number of characters the password must contain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_length PasswordPolicy#min_length}
  */
  readonly minLength?: number;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of lowercase characters the password must contain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_lower_case_chars PasswordPolicy#min_lower_case_chars}
  */
  readonly minLowerCaseChars?: number;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of numeric characters the password must contain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_numeric_chars PasswordPolicy#min_numeric_chars}
  */
  readonly minNumericChars?: number;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of special characters the password must contain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_special_chars PasswordPolicy#min_special_chars}
  */
  readonly minSpecialChars?: number;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of uppercase characters the password must contain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_upper_case_chars PasswordPolicy#min_upper_case_chars}
  */
  readonly minUpperCaseChars?: number;
  /**
  * Identifier for the password policy; must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#name PasswordPolicy#name}
  */
  readonly name: string;
  /**
  * (Default: `false`) Whether to override a previous password policy with the same name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#or_replace PasswordPolicy#or_replace}
  */
  readonly orReplace?: boolean | cdktn.IResolvable;
  /**
  * The schema this password policy belongs to. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#schema PasswordPolicy#schema}
  */
  readonly schema: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#timeouts PasswordPolicy#timeouts}
  */
  readonly timeouts?: PasswordPolicyTimeouts;
}
export interface PasswordPolicyDescribeOutput {
}

export function passwordPolicyDescribeOutputToTerraform(struct?: PasswordPolicyDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function passwordPolicyDescribeOutputToHclTerraform(struct?: PasswordPolicyDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PasswordPolicyDescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PasswordPolicyDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PasswordPolicyDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // password_history - computed: true, optional: false, required: false
  public get passwordHistory() {
    return this.getNumberAttribute('password_history');
  }

  // password_lockout_time_mins - computed: true, optional: false, required: false
  public get passwordLockoutTimeMins() {
    return this.getNumberAttribute('password_lockout_time_mins');
  }

  // password_max_age_days - computed: true, optional: false, required: false
  public get passwordMaxAgeDays() {
    return this.getNumberAttribute('password_max_age_days');
  }

  // password_max_length - computed: true, optional: false, required: false
  public get passwordMaxLength() {
    return this.getNumberAttribute('password_max_length');
  }

  // password_max_retries - computed: true, optional: false, required: false
  public get passwordMaxRetries() {
    return this.getNumberAttribute('password_max_retries');
  }

  // password_min_age_days - computed: true, optional: false, required: false
  public get passwordMinAgeDays() {
    return this.getNumberAttribute('password_min_age_days');
  }

  // password_min_length - computed: true, optional: false, required: false
  public get passwordMinLength() {
    return this.getNumberAttribute('password_min_length');
  }

  // password_min_lower_case_chars - computed: true, optional: false, required: false
  public get passwordMinLowerCaseChars() {
    return this.getNumberAttribute('password_min_lower_case_chars');
  }

  // password_min_numeric_chars - computed: true, optional: false, required: false
  public get passwordMinNumericChars() {
    return this.getNumberAttribute('password_min_numeric_chars');
  }

  // password_min_special_chars - computed: true, optional: false, required: false
  public get passwordMinSpecialChars() {
    return this.getNumberAttribute('password_min_special_chars');
  }

  // password_min_upper_case_chars - computed: true, optional: false, required: false
  public get passwordMinUpperCaseChars() {
    return this.getNumberAttribute('password_min_upper_case_chars');
  }
}

export class PasswordPolicyDescribeOutputList extends cdktn.ComplexList {

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
  public get(index: number): PasswordPolicyDescribeOutputOutputReference {
    return new PasswordPolicyDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PasswordPolicyShowOutput {
}

export function passwordPolicyShowOutputToTerraform(struct?: PasswordPolicyShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function passwordPolicyShowOutputToHclTerraform(struct?: PasswordPolicyShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PasswordPolicyShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PasswordPolicyShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PasswordPolicyShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // owner_role_type - computed: true, optional: false, required: false
  public get ownerRoleType() {
    return this.getStringAttribute('owner_role_type');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
}

export class PasswordPolicyShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): PasswordPolicyShowOutputOutputReference {
    return new PasswordPolicyShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PasswordPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#create PasswordPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#delete PasswordPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#read PasswordPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#update PasswordPolicy#update}
  */
  readonly update?: string;
}

export function passwordPolicyTimeoutsToTerraform(struct?: PasswordPolicyTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    read: cdktn.stringToTerraform(struct!.read),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function passwordPolicyTimeoutsToHclTerraform(struct?: PasswordPolicyTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class PasswordPolicyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PasswordPolicyTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PasswordPolicyTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy snowflake_password_policy}
*/
export class PasswordPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_password_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PasswordPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PasswordPolicy to import
  * @param importFromId The id of the existing PasswordPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PasswordPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_password_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy snowflake_password_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PasswordPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PasswordPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_password_policy',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.16.0',
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
    this._comment = config.comment;
    this._database = config.database;
    this._history = config.history;
    this._id = config.id;
    this._ifNotExists = config.ifNotExists;
    this._lockoutTimeMins = config.lockoutTimeMins;
    this._maxAgeDays = config.maxAgeDays;
    this._maxLength = config.maxLength;
    this._maxRetries = config.maxRetries;
    this._minAgeDays = config.minAgeDays;
    this._minLength = config.minLength;
    this._minLowerCaseChars = config.minLowerCaseChars;
    this._minNumericChars = config.minNumericChars;
    this._minSpecialChars = config.minSpecialChars;
    this._minUpperCaseChars = config.minUpperCaseChars;
    this._name = config.name;
    this._orReplace = config.orReplace;
    this._schema = config.schema;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new PasswordPolicyDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // fully_qualified_name - computed: true, optional: false, required: false
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
  }

  // history - computed: false, optional: true, required: false
  private _history?: number; 
  public get history() {
    return this.getNumberAttribute('history');
  }
  public set history(value: number) {
    this._history = value;
  }
  public resetHistory() {
    this._history = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyInput() {
    return this._history;
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

  // if_not_exists - computed: false, optional: true, required: false
  private _ifNotExists?: boolean | cdktn.IResolvable; 
  public get ifNotExists() {
    return this.getBooleanAttribute('if_not_exists');
  }
  public set ifNotExists(value: boolean | cdktn.IResolvable) {
    this._ifNotExists = value;
  }
  public resetIfNotExists() {
    this._ifNotExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNotExistsInput() {
    return this._ifNotExists;
  }

  // lockout_time_mins - computed: false, optional: true, required: false
  private _lockoutTimeMins?: number; 
  public get lockoutTimeMins() {
    return this.getNumberAttribute('lockout_time_mins');
  }
  public set lockoutTimeMins(value: number) {
    this._lockoutTimeMins = value;
  }
  public resetLockoutTimeMins() {
    this._lockoutTimeMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutTimeMinsInput() {
    return this._lockoutTimeMins;
  }

  // max_age_days - computed: false, optional: true, required: false
  private _maxAgeDays?: number; 
  public get maxAgeDays() {
    return this.getNumberAttribute('max_age_days');
  }
  public set maxAgeDays(value: number) {
    this._maxAgeDays = value;
  }
  public resetMaxAgeDays() {
    this._maxAgeDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeDaysInput() {
    return this._maxAgeDays;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // min_age_days - computed: false, optional: true, required: false
  private _minAgeDays?: number; 
  public get minAgeDays() {
    return this.getNumberAttribute('min_age_days');
  }
  public set minAgeDays(value: number) {
    this._minAgeDays = value;
  }
  public resetMinAgeDays() {
    this._minAgeDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAgeDaysInput() {
    return this._minAgeDays;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // min_lower_case_chars - computed: false, optional: true, required: false
  private _minLowerCaseChars?: number; 
  public get minLowerCaseChars() {
    return this.getNumberAttribute('min_lower_case_chars');
  }
  public set minLowerCaseChars(value: number) {
    this._minLowerCaseChars = value;
  }
  public resetMinLowerCaseChars() {
    this._minLowerCaseChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLowerCaseCharsInput() {
    return this._minLowerCaseChars;
  }

  // min_numeric_chars - computed: false, optional: true, required: false
  private _minNumericChars?: number; 
  public get minNumericChars() {
    return this.getNumberAttribute('min_numeric_chars');
  }
  public set minNumericChars(value: number) {
    this._minNumericChars = value;
  }
  public resetMinNumericChars() {
    this._minNumericChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumericCharsInput() {
    return this._minNumericChars;
  }

  // min_special_chars - computed: false, optional: true, required: false
  private _minSpecialChars?: number; 
  public get minSpecialChars() {
    return this.getNumberAttribute('min_special_chars');
  }
  public set minSpecialChars(value: number) {
    this._minSpecialChars = value;
  }
  public resetMinSpecialChars() {
    this._minSpecialChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSpecialCharsInput() {
    return this._minSpecialChars;
  }

  // min_upper_case_chars - computed: false, optional: true, required: false
  private _minUpperCaseChars?: number; 
  public get minUpperCaseChars() {
    return this.getNumberAttribute('min_upper_case_chars');
  }
  public set minUpperCaseChars(value: number) {
    this._minUpperCaseChars = value;
  }
  public resetMinUpperCaseChars() {
    this._minUpperCaseChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUpperCaseCharsInput() {
    return this._minUpperCaseChars;
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

  // or_replace - computed: false, optional: true, required: false
  private _orReplace?: boolean | cdktn.IResolvable; 
  public get orReplace() {
    return this.getBooleanAttribute('or_replace');
  }
  public set orReplace(value: boolean | cdktn.IResolvable) {
    this._orReplace = value;
  }
  public resetOrReplace() {
    this._orReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orReplaceInput() {
    return this._orReplace;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new PasswordPolicyShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PasswordPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PasswordPolicyTimeouts) {
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
      comment: cdktn.stringToTerraform(this._comment),
      database: cdktn.stringToTerraform(this._database),
      history: cdktn.numberToTerraform(this._history),
      id: cdktn.stringToTerraform(this._id),
      if_not_exists: cdktn.booleanToTerraform(this._ifNotExists),
      lockout_time_mins: cdktn.numberToTerraform(this._lockoutTimeMins),
      max_age_days: cdktn.numberToTerraform(this._maxAgeDays),
      max_length: cdktn.numberToTerraform(this._maxLength),
      max_retries: cdktn.numberToTerraform(this._maxRetries),
      min_age_days: cdktn.numberToTerraform(this._minAgeDays),
      min_length: cdktn.numberToTerraform(this._minLength),
      min_lower_case_chars: cdktn.numberToTerraform(this._minLowerCaseChars),
      min_numeric_chars: cdktn.numberToTerraform(this._minNumericChars),
      min_special_chars: cdktn.numberToTerraform(this._minSpecialChars),
      min_upper_case_chars: cdktn.numberToTerraform(this._minUpperCaseChars),
      name: cdktn.stringToTerraform(this._name),
      or_replace: cdktn.booleanToTerraform(this._orReplace),
      schema: cdktn.stringToTerraform(this._schema),
      timeouts: passwordPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktn.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktn.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      history: {
        value: cdktn.numberToHclTerraform(this._history),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      if_not_exists: {
        value: cdktn.booleanToHclTerraform(this._ifNotExists),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lockout_time_mins: {
        value: cdktn.numberToHclTerraform(this._lockoutTimeMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_age_days: {
        value: cdktn.numberToHclTerraform(this._maxAgeDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_length: {
        value: cdktn.numberToHclTerraform(this._maxLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retries: {
        value: cdktn.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_age_days: {
        value: cdktn.numberToHclTerraform(this._minAgeDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_length: {
        value: cdktn.numberToHclTerraform(this._minLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_lower_case_chars: {
        value: cdktn.numberToHclTerraform(this._minLowerCaseChars),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_numeric_chars: {
        value: cdktn.numberToHclTerraform(this._minNumericChars),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_special_chars: {
        value: cdktn.numberToHclTerraform(this._minSpecialChars),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_upper_case_chars: {
        value: cdktn.numberToHclTerraform(this._minUpperCaseChars),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      or_replace: {
        value: cdktn.booleanToHclTerraform(this._orReplace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schema: {
        value: cdktn.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: passwordPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PasswordPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
