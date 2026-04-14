/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TagConfig extends cdktn.TerraformMetaArguments {
  /**
  * Set of allowed values for the tag (unordered). When specified, only these values can be assigned. When the `TAGS_ALLOW_EMPTY_ALLOWED_VALUES` experiment is enabled, removing this field from the configuration reverts the tag to accepting any value. Conflicts with `no_allowed_values` and `ordered_allowed_values`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag#allowed_values Tag#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * Specifies a comment for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag#comment Tag#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the tag. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag#database Tag#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag#id Tag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of masking policies for the tag. A tag can support one masking policy for each data type. If masking policies are assigned to the tag, before dropping the tag, the provider automatically unassigns them. For more information about this resource, see [docs](./masking_policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag#masking_policies Tag#masking_policies}
  */
  readonly maskingPolicies?: string[];
  /**
  * Specifies the identifier for the tag; must be unique for the database in which the tag is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag#name Tag#name}
  */
  readonly name: string;
  /**
  * When set to true, the tag explicitly disallows any value from being assigned. This is different from omitting `allowed_values`, which means any value is accepted. Available only when the `TAGS_ALLOW_EMPTY_ALLOWED_VALUES` experiment is enabled. Conflicts with `allowed_values` and `ordered_allowed_values`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag#no_allowed_values Tag#no_allowed_values}
  */
  readonly noAllowedValues?: boolean | cdktn.IResolvable;
  /**
  * Ordered list of allowed values for the tag. The order is preserved in Snowflake and is significant when `on_conflict.allowed_values_sequence` is used — the first matching value in the sequence wins. Use this instead of `allowed_values` when order matters. Conflicts with `allowed_values` and `no_allowed_values`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag#ordered_allowed_values Tag#ordered_allowed_values}
  */
  readonly orderedAllowedValues?: string[];
  /**
  * Specifies that the tag will be automatically propagated from source objects to target objects. See more about tag propagation in the [official documentation](https://docs.snowflake.com/en/user-guide/object-tagging/propagation). Valid options are: `NONE` | `ON_DEPENDENCY` | `ON_DATA_MOVEMENT` | `ON_DEPENDENCY_AND_DATA_MOVEMENT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag#propagate Tag#propagate}
  */
  readonly propagate?: string;
  /**
  * The schema in which to create the tag. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag#schema Tag#schema}
  */
  readonly schema: string;
  /**
  * on_conflict block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag#on_conflict Tag#on_conflict}
  */
  readonly onConflict?: TagOnConflict;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag#timeouts Tag#timeouts}
  */
  readonly timeouts?: TagTimeouts;
}
export interface TagShowOutput {
}

export function tagShowOutputToTerraform(struct?: TagShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function tagShowOutputToHclTerraform(struct?: TagShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TagShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TagShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_values'));
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // owner_role_type - computed: true, optional: false, required: false
  public get ownerRoleType() {
    return this.getStringAttribute('owner_role_type');
  }

  // propagate - computed: true, optional: false, required: false
  public get propagate() {
    return this.getStringAttribute('propagate');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
}

export class TagShowOutputList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TagShowOutputOutputReference {
    return new TagShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TagOnConflict {
  /**
  * The order of the values in the ALLOWED_VALUES property of the tag determines which value is used when there is a conflict. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag#allowed_values_sequence Tag#allowed_values_sequence}
  */
  readonly allowedValuesSequence?: boolean | cdktn.IResolvable;
  /**
  * Whenever there is a conflict, the value of tag is set to custom_value. If `allowed_values` are set, the value set in this field should be one of the values in the `allowed_values` list. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag#custom_value Tag#custom_value}
  */
  readonly customValue?: string;
}

export function tagOnConflictToTerraform(struct?: TagOnConflictOutputReference | TagOnConflict): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_values_sequence: cdktn.booleanToTerraform(struct!.allowedValuesSequence),
    custom_value: cdktn.stringToTerraform(struct!.customValue),
  }
}


export function tagOnConflictToHclTerraform(struct?: TagOnConflictOutputReference | TagOnConflict): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_values_sequence: {
      value: cdktn.booleanToHclTerraform(struct!.allowedValuesSequence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_value: {
      value: cdktn.stringToHclTerraform(struct!.customValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TagOnConflictOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TagOnConflict | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValuesSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValuesSequence = this._allowedValuesSequence;
    }
    if (this._customValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customValue = this._customValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagOnConflict | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedValuesSequence = undefined;
      this._customValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedValuesSequence = value.allowedValuesSequence;
      this._customValue = value.customValue;
    }
  }

  // allowed_values_sequence - computed: false, optional: true, required: false
  private _allowedValuesSequence?: boolean | cdktn.IResolvable; 
  public get allowedValuesSequence() {
    return this.getBooleanAttribute('allowed_values_sequence');
  }
  public set allowedValuesSequence(value: boolean | cdktn.IResolvable) {
    this._allowedValuesSequence = value;
  }
  public resetAllowedValuesSequence() {
    this._allowedValuesSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesSequenceInput() {
    return this._allowedValuesSequence;
  }

  // custom_value - computed: false, optional: true, required: false
  private _customValue?: string; 
  public get customValue() {
    return this.getStringAttribute('custom_value');
  }
  public set customValue(value: string) {
    this._customValue = value;
  }
  public resetCustomValue() {
    this._customValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customValueInput() {
    return this._customValue;
  }
}
export interface TagTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag#create Tag#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag#delete Tag#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag#read Tag#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag#update Tag#update}
  */
  readonly update?: string;
}

export function tagTimeoutsToTerraform(struct?: TagTimeouts | cdktn.IResolvable): any {
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


export function tagTimeoutsToHclTerraform(struct?: TagTimeouts | cdktn.IResolvable): any {
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

export class TagTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TagTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: TagTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag snowflake_tag}
*/
export class Tag extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Tag resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tag to import
  * @param importFromId The id of the existing Tag that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/tag snowflake_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagConfig
  */
  public constructor(scope: Construct, id: string, config: TagConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_tag',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.15.0',
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
    this._allowedValues = config.allowedValues;
    this._comment = config.comment;
    this._database = config.database;
    this._id = config.id;
    this._maskingPolicies = config.maskingPolicies;
    this._name = config.name;
    this._noAllowedValues = config.noAllowedValues;
    this._orderedAllowedValues = config.orderedAllowedValues;
    this._propagate = config.propagate;
    this._schema = config.schema;
    this._onConflict.internalValue = config.onConflict;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_values - computed: false, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_values'));
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
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

  // masking_policies - computed: false, optional: true, required: false
  private _maskingPolicies?: string[]; 
  public get maskingPolicies() {
    return cdktn.Fn.tolist(this.getListAttribute('masking_policies'));
  }
  public set maskingPolicies(value: string[]) {
    this._maskingPolicies = value;
  }
  public resetMaskingPolicies() {
    this._maskingPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingPoliciesInput() {
    return this._maskingPolicies;
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

  // no_allowed_values - computed: false, optional: true, required: false
  private _noAllowedValues?: boolean | cdktn.IResolvable; 
  public get noAllowedValues() {
    return this.getBooleanAttribute('no_allowed_values');
  }
  public set noAllowedValues(value: boolean | cdktn.IResolvable) {
    this._noAllowedValues = value;
  }
  public resetNoAllowedValues() {
    this._noAllowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAllowedValuesInput() {
    return this._noAllowedValues;
  }

  // ordered_allowed_values - computed: false, optional: true, required: false
  private _orderedAllowedValues?: string[]; 
  public get orderedAllowedValues() {
    return this.getListAttribute('ordered_allowed_values');
  }
  public set orderedAllowedValues(value: string[]) {
    this._orderedAllowedValues = value;
  }
  public resetOrderedAllowedValues() {
    this._orderedAllowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedAllowedValuesInput() {
    return this._orderedAllowedValues;
  }

  // propagate - computed: false, optional: true, required: false
  private _propagate?: string; 
  public get propagate() {
    return this.getStringAttribute('propagate');
  }
  public set propagate(value: string) {
    this._propagate = value;
  }
  public resetPropagate() {
    this._propagate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateInput() {
    return this._propagate;
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
  private _showOutput = new TagShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // on_conflict - computed: false, optional: true, required: false
  private _onConflict = new TagOnConflictOutputReference(this, "on_conflict");
  public get onConflict() {
    return this._onConflict;
  }
  public putOnConflict(value: TagOnConflict) {
    this._onConflict.internalValue = value;
  }
  public resetOnConflict() {
    this._onConflict.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onConflictInput() {
    return this._onConflict.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TagTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TagTimeouts) {
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
      allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedValues),
      comment: cdktn.stringToTerraform(this._comment),
      database: cdktn.stringToTerraform(this._database),
      id: cdktn.stringToTerraform(this._id),
      masking_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(this._maskingPolicies),
      name: cdktn.stringToTerraform(this._name),
      no_allowed_values: cdktn.booleanToTerraform(this._noAllowedValues),
      ordered_allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(this._orderedAllowedValues),
      propagate: cdktn.stringToTerraform(this._propagate),
      schema: cdktn.stringToTerraform(this._schema),
      on_conflict: tagOnConflictToTerraform(this._onConflict.internalValue),
      timeouts: tagTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_values: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedValues),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
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
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      masking_policies: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._maskingPolicies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_allowed_values: {
        value: cdktn.booleanToHclTerraform(this._noAllowedValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ordered_allowed_values: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._orderedAllowedValues),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      propagate: {
        value: cdktn.stringToHclTerraform(this._propagate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktn.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_conflict: {
        value: tagOnConflictToHclTerraform(this._onConflict.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TagOnConflictList",
      },
      timeouts: {
        value: tagTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TagTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
