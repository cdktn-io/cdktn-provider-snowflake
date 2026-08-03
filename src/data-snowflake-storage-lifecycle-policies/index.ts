/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataSnowflakeStorageLifecyclePoliciesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies#id DataSnowflakeStorageLifecyclePolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies#like DataSnowflakeStorageLifecyclePolicies#like}
  */
  readonly like?: string;
  /**
  * (Default: `true`) Runs DESC STORAGE LIFECYCLE POLICY for each storage lifecycle policy returned by SHOW STORAGE LIFECYCLE POLICIES. The output of describe is saved to the describe_output field. By default this value is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies#with_describe DataSnowflakeStorageLifecyclePolicies#with_describe}
  */
  readonly withDescribe?: boolean | cdktn.IResolvable;
  /**
  * in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies#in DataSnowflakeStorageLifecyclePolicies#in}
  */
  readonly in?: DataSnowflakeStorageLifecyclePoliciesIn;
}
export interface DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature {
}

export function dataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureToTerraform(struct?: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureToHclTerraform(struct?: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList extends cdktn.ComplexList {

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
  public get(index: number): DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference {
    return new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput {
}

export function dataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputToTerraform(struct?: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputToHclTerraform(struct?: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_for_days - computed: true, optional: false, required: false
  public get archiveForDays() {
    return this.getNumberAttribute('archive_for_days');
  }

  // archive_tier - computed: true, optional: false, required: false
  public get archiveTier() {
    return this.getStringAttribute('archive_tier');
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // return_type - computed: true, optional: false, required: false
  public get returnType() {
    return this.getStringAttribute('return_type');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // signature - computed: true, optional: false, required: false
  private _signature = new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputSignatureList(this, "signature", false);
  public get signature() {
    return this._signature;
  }
}

export class DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList extends cdktn.ComplexList {

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
  public get(index: number): DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference {
    return new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput {
}

export function dataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputToTerraform(struct?: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputToHclTerraform(struct?: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutput | undefined) {
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

export class DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference {
    return new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies {
}

export function dataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesToTerraform(struct?: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesToHclTerraform(struct?: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }
}

export class DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList extends cdktn.ComplexList {

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
  public get(index: number): DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference {
    return new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeStorageLifecyclePoliciesIn {
  /**
  * Returns records for the entire account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies#account DataSnowflakeStorageLifecyclePolicies#account}
  */
  readonly account?: boolean | cdktn.IResolvable;
  /**
  * Returns records for the current database in use or for a specified database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies#database DataSnowflakeStorageLifecyclePolicies#database}
  */
  readonly database?: string;
  /**
  * Returns records for the current schema in use or a specified schema. Use fully qualified name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies#schema DataSnowflakeStorageLifecyclePolicies#schema}
  */
  readonly schema?: string;
}

export function dataSnowflakeStorageLifecyclePoliciesInToTerraform(struct?: DataSnowflakeStorageLifecyclePoliciesInOutputReference | DataSnowflakeStorageLifecyclePoliciesIn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account: cdktn.booleanToTerraform(struct!.account),
    database: cdktn.stringToTerraform(struct!.database),
    schema: cdktn.stringToTerraform(struct!.schema),
  }
}


export function dataSnowflakeStorageLifecyclePoliciesInToHclTerraform(struct?: DataSnowflakeStorageLifecyclePoliciesInOutputReference | DataSnowflakeStorageLifecyclePoliciesIn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account: {
      value: cdktn.booleanToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSnowflakeStorageLifecyclePoliciesInOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSnowflakeStorageLifecyclePoliciesIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeStorageLifecyclePoliciesIn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
      this._database = undefined;
      this._schema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
      this._database = value.database;
      this._schema = value.schema;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: boolean | cdktn.IResolvable; 
  public get account() {
    return this.getBooleanAttribute('account');
  }
  public set account(value: boolean | cdktn.IResolvable) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies snowflake_storage_lifecycle_policies}
*/
export class DataSnowflakeStorageLifecyclePolicies extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_storage_lifecycle_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataSnowflakeStorageLifecyclePolicies resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakeStorageLifecyclePolicies to import
  * @param importFromId The id of the existing DataSnowflakeStorageLifecyclePolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeStorageLifecyclePolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_storage_lifecycle_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/storage_lifecycle_policies snowflake_storage_lifecycle_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeStorageLifecyclePoliciesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeStorageLifecyclePoliciesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_storage_lifecycle_policies',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.19.0',
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
    this._id = config.id;
    this._like = config.like;
    this._withDescribe = config.withDescribe;
    this._in.internalValue = config.in;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // like - computed: false, optional: true, required: false
  private _like?: string; 
  public get like() {
    return this.getStringAttribute('like');
  }
  public set like(value: string) {
    this._like = value;
  }
  public resetLike() {
    this._like = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get likeInput() {
    return this._like;
  }

  // storage_lifecycle_policies - computed: true, optional: false, required: false
  private _storageLifecyclePolicies = new DataSnowflakeStorageLifecyclePoliciesStorageLifecyclePoliciesList(this, "storage_lifecycle_policies", false);
  public get storageLifecyclePolicies() {
    return this._storageLifecyclePolicies;
  }

  // with_describe - computed: false, optional: true, required: false
  private _withDescribe?: boolean | cdktn.IResolvable; 
  public get withDescribe() {
    return this.getBooleanAttribute('with_describe');
  }
  public set withDescribe(value: boolean | cdktn.IResolvable) {
    this._withDescribe = value;
  }
  public resetWithDescribe() {
    this._withDescribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withDescribeInput() {
    return this._withDescribe;
  }

  // in - computed: false, optional: true, required: false
  private _in = new DataSnowflakeStorageLifecyclePoliciesInOutputReference(this, "in");
  public get in() {
    return this._in;
  }
  public putIn(value: DataSnowflakeStorageLifecyclePoliciesIn) {
    this._in.internalValue = value;
  }
  public resetIn() {
    this._in.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inInput() {
    return this._in.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      like: cdktn.stringToTerraform(this._like),
      with_describe: cdktn.booleanToTerraform(this._withDescribe),
      in: dataSnowflakeStorageLifecyclePoliciesInToTerraform(this._in.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      like: {
        value: cdktn.stringToHclTerraform(this._like),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_describe: {
        value: cdktn.booleanToHclTerraform(this._withDescribe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      in: {
        value: dataSnowflakeStorageLifecyclePoliciesInToHclTerraform(this._in.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSnowflakeStorageLifecyclePoliciesInList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
