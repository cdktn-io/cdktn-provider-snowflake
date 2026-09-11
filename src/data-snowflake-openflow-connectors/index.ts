/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataSnowflakeOpenflowConnectorsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#id DataSnowflakeOpenflowConnectors#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#like DataSnowflakeOpenflowConnectors#like}
  */
  readonly like?: string;
  /**
  * Filters the output with **case-sensitive** characters indicating the beginning of the object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#starts_with DataSnowflakeOpenflowConnectors#starts_with}
  */
  readonly startsWith?: string;
  /**
  * (Default: `true`) Runs DESC OPENFLOW CONNECTOR for each connector returned by SHOW OPENFLOW CONNECTORS. The output of describe is saved to the description field. By default this value is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#with_describe DataSnowflakeOpenflowConnectors#with_describe}
  */
  readonly withDescribe?: boolean | cdktn.IResolvable;
  /**
  * in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#in DataSnowflakeOpenflowConnectors#in}
  */
  readonly in?: DataSnowflakeOpenflowConnectorsIn;
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#limit DataSnowflakeOpenflowConnectors#limit}
  */
  readonly limit?: DataSnowflakeOpenflowConnectorsLimit;
}
export interface DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput {
}

export function dataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputToTerraform(struct?: DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputToHclTerraform(struct?: DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput | undefined) {
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

  // connector_definition - computed: true, optional: false, required: false
  public get connectorDefinition() {
    return this.getStringAttribute('connector_definition');
  }

  // connector_url - computed: true, optional: false, required: false
  public get connectorUrl() {
    return this.getStringAttribute('connector_url');
  }

  // default_version - computed: true, optional: false, required: false
  public get defaultVersion() {
    return this.getStringAttribute('default_version');
  }

  // default_version_alias - computed: true, optional: false, required: false
  public get defaultVersionAlias() {
    return this.getStringAttribute('default_version_alias');
  }

  // default_version_git_commit_hash - computed: true, optional: false, required: false
  public get defaultVersionGitCommitHash() {
    return this.getStringAttribute('default_version_git_commit_hash');
  }

  // default_version_location_uri - computed: true, optional: false, required: false
  public get defaultVersionLocationUri() {
    return this.getStringAttribute('default_version_location_uri');
  }

  // default_version_name - computed: true, optional: false, required: false
  public get defaultVersionName() {
    return this.getStringAttribute('default_version_name');
  }

  // default_version_source_location_uri - computed: true, optional: false, required: false
  public get defaultVersionSourceLocationUri() {
    return this.getStringAttribute('default_version_source_location_uri');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // last_version_alias - computed: true, optional: false, required: false
  public get lastVersionAlias() {
    return this.getStringAttribute('last_version_alias');
  }

  // last_version_git_commit_hash - computed: true, optional: false, required: false
  public get lastVersionGitCommitHash() {
    return this.getStringAttribute('last_version_git_commit_hash');
  }

  // last_version_location_uri - computed: true, optional: false, required: false
  public get lastVersionLocationUri() {
    return this.getStringAttribute('last_version_location_uri');
  }

  // last_version_name - computed: true, optional: false, required: false
  public get lastVersionName() {
    return this.getStringAttribute('last_version_name');
  }

  // last_version_source_location_uri - computed: true, optional: false, required: false
  public get lastVersionSourceLocationUri() {
    return this.getStringAttribute('last_version_source_location_uri');
  }

  // live_version_location_uri - computed: true, optional: false, required: false
  public get liveVersionLocationUri() {
    return this.getStringAttribute('live_version_location_uri');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList extends cdktn.ComplexList {

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
  public get(index: number): DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference {
    return new DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput {
}

export function dataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputToTerraform(struct?: DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputToHclTerraform(struct?: DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput | undefined) {
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

  // connector_definition - computed: true, optional: false, required: false
  public get connectorDefinition() {
    return this.getStringAttribute('connector_definition');
  }

  // connector_url - computed: true, optional: false, required: false
  public get connectorUrl() {
    return this.getStringAttribute('connector_url');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // default_version - computed: true, optional: false, required: false
  public get defaultVersion() {
    return this.getStringAttribute('default_version');
  }

  // default_version_alias - computed: true, optional: false, required: false
  public get defaultVersionAlias() {
    return this.getStringAttribute('default_version_alias');
  }

  // default_version_location_uri - computed: true, optional: false, required: false
  public get defaultVersionLocationUri() {
    return this.getStringAttribute('default_version_location_uri');
  }

  // default_version_name - computed: true, optional: false, required: false
  public get defaultVersionName() {
    return this.getStringAttribute('default_version_name');
  }

  // default_version_source_location_uri - computed: true, optional: false, required: false
  public get defaultVersionSourceLocationUri() {
    return this.getStringAttribute('default_version_source_location_uri');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // live_version_location_uri - computed: true, optional: false, required: false
  public get liveVersionLocationUri() {
    return this.getStringAttribute('live_version_location_uri');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_on - computed: true, optional: false, required: false
  public get updatedOn() {
    return this.getStringAttribute('updated_on');
  }
}

export class DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference {
    return new DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeOpenflowConnectorsOpenflowConnectors {
}

export function dataSnowflakeOpenflowConnectorsOpenflowConnectorsToTerraform(struct?: DataSnowflakeOpenflowConnectorsOpenflowConnectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeOpenflowConnectorsOpenflowConnectorsToHclTerraform(struct?: DataSnowflakeOpenflowConnectorsOpenflowConnectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSnowflakeOpenflowConnectorsOpenflowConnectors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeOpenflowConnectorsOpenflowConnectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }
}

export class DataSnowflakeOpenflowConnectorsOpenflowConnectorsList extends cdktn.ComplexList {

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
  public get(index: number): DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference {
    return new DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeOpenflowConnectorsIn {
  /**
  * Returns records for the entire account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#account DataSnowflakeOpenflowConnectors#account}
  */
  readonly account?: boolean | cdktn.IResolvable;
  /**
  * Returns records for the current database in use or for a specified database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#database DataSnowflakeOpenflowConnectors#database}
  */
  readonly database?: string;
  /**
  * Returns records for the current schema in use or a specified schema. Use fully qualified name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#schema DataSnowflakeOpenflowConnectors#schema}
  */
  readonly schema?: string;
}

export function dataSnowflakeOpenflowConnectorsInToTerraform(struct?: DataSnowflakeOpenflowConnectorsInOutputReference | DataSnowflakeOpenflowConnectorsIn): any {
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


export function dataSnowflakeOpenflowConnectorsInToHclTerraform(struct?: DataSnowflakeOpenflowConnectorsInOutputReference | DataSnowflakeOpenflowConnectorsIn): any {
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

export class DataSnowflakeOpenflowConnectorsInOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSnowflakeOpenflowConnectorsIn | undefined {
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

  public set internalValue(value: DataSnowflakeOpenflowConnectorsIn | undefined) {
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
export interface DataSnowflakeOpenflowConnectorsLimit {
  /**
  * Specifies a **case-sensitive** pattern that is used to match object name. After the first match, the limit on the number of rows will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#from DataSnowflakeOpenflowConnectors#from}
  */
  readonly from?: string;
  /**
  * The maximum number of rows to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#rows DataSnowflakeOpenflowConnectors#rows}
  */
  readonly rows: number;
}

export function dataSnowflakeOpenflowConnectorsLimitToTerraform(struct?: DataSnowflakeOpenflowConnectorsLimitOutputReference | DataSnowflakeOpenflowConnectorsLimit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.stringToTerraform(struct!.from),
    rows: cdktn.numberToTerraform(struct!.rows),
  }
}


export function dataSnowflakeOpenflowConnectorsLimitToHclTerraform(struct?: DataSnowflakeOpenflowConnectorsLimitOutputReference | DataSnowflakeOpenflowConnectorsLimit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from: {
      value: cdktn.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rows: {
      value: cdktn.numberToHclTerraform(struct!.rows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSnowflakeOpenflowConnectorsLimitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSnowflakeOpenflowConnectorsLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._rows !== undefined) {
      hasAnyValues = true;
      internalValueResult.rows = this._rows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeOpenflowConnectorsLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._rows = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._rows = value.rows;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // rows - computed: false, optional: false, required: true
  private _rows?: number; 
  public get rows() {
    return this.getNumberAttribute('rows');
  }
  public set rows(value: number) {
    this._rows = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors snowflake_openflow_connectors}
*/
export class DataSnowflakeOpenflowConnectors extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_openflow_connectors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataSnowflakeOpenflowConnectors resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakeOpenflowConnectors to import
  * @param importFromId The id of the existing DataSnowflakeOpenflowConnectors that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeOpenflowConnectors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_openflow_connectors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors snowflake_openflow_connectors} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeOpenflowConnectorsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeOpenflowConnectorsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_openflow_connectors',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.21.0',
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
    this._startsWith = config.startsWith;
    this._withDescribe = config.withDescribe;
    this._in.internalValue = config.in;
    this._limit.internalValue = config.limit;
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

  // openflow_connectors - computed: true, optional: false, required: false
  private _openflowConnectors = new DataSnowflakeOpenflowConnectorsOpenflowConnectorsList(this, "openflow_connectors", false);
  public get openflowConnectors() {
    return this._openflowConnectors;
  }

  // starts_with - computed: false, optional: true, required: false
  private _startsWith?: string; 
  public get startsWith() {
    return this.getStringAttribute('starts_with');
  }
  public set startsWith(value: string) {
    this._startsWith = value;
  }
  public resetStartsWith() {
    this._startsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithInput() {
    return this._startsWith;
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
  private _in = new DataSnowflakeOpenflowConnectorsInOutputReference(this, "in");
  public get in() {
    return this._in;
  }
  public putIn(value: DataSnowflakeOpenflowConnectorsIn) {
    this._in.internalValue = value;
  }
  public resetIn() {
    this._in.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inInput() {
    return this._in.internalValue;
  }

  // limit - computed: false, optional: true, required: false
  private _limit = new DataSnowflakeOpenflowConnectorsLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: DataSnowflakeOpenflowConnectorsLimit) {
    this._limit.internalValue = value;
  }
  public resetLimit() {
    this._limit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      like: cdktn.stringToTerraform(this._like),
      starts_with: cdktn.stringToTerraform(this._startsWith),
      with_describe: cdktn.booleanToTerraform(this._withDescribe),
      in: dataSnowflakeOpenflowConnectorsInToTerraform(this._in.internalValue),
      limit: dataSnowflakeOpenflowConnectorsLimitToTerraform(this._limit.internalValue),
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
      starts_with: {
        value: cdktn.stringToHclTerraform(this._startsWith),
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
        value: dataSnowflakeOpenflowConnectorsInToHclTerraform(this._in.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSnowflakeOpenflowConnectorsInList",
      },
      limit: {
        value: dataSnowflakeOpenflowConnectorsLimitToHclTerraform(this._limit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSnowflakeOpenflowConnectorsLimitList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
