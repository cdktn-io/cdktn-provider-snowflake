/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataSnowflakeMcpServersConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers#id DataSnowflakeMcpServers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers#like DataSnowflakeMcpServers#like}
  */
  readonly like?: string;
  /**
  * (Default: `true`) Runs DESC MCP SERVER for each MCP server returned by SHOW MCP SERVERS. The output of describe is saved to the describe_output field. By default this value is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers#with_describe DataSnowflakeMcpServers#with_describe}
  */
  readonly withDescribe?: boolean | cdktn.IResolvable;
  /**
  * in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers#in DataSnowflakeMcpServers#in}
  */
  readonly in?: DataSnowflakeMcpServersIn;
}
export interface DataSnowflakeMcpServersMcpServersDescribeOutput {
}

export function dataSnowflakeMcpServersMcpServersDescribeOutputToTerraform(struct?: DataSnowflakeMcpServersMcpServersDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeMcpServersMcpServersDescribeOutputToHclTerraform(struct?: DataSnowflakeMcpServersMcpServersDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSnowflakeMcpServersMcpServersDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeMcpServersMcpServersDescribeOutput | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // server_spec - computed: true, optional: false, required: false
  public get serverSpec() {
    return this.getStringAttribute('server_spec');
  }
}

export class DataSnowflakeMcpServersMcpServersDescribeOutputList extends cdktn.ComplexList {

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
  public get(index: number): DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference {
    return new DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeMcpServersMcpServersShowOutput {
}

export function dataSnowflakeMcpServersMcpServersShowOutputToTerraform(struct?: DataSnowflakeMcpServersMcpServersShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeMcpServersMcpServersShowOutputToHclTerraform(struct?: DataSnowflakeMcpServersMcpServersShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeMcpServersMcpServersShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSnowflakeMcpServersMcpServersShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeMcpServersMcpServersShowOutput | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
}

export class DataSnowflakeMcpServersMcpServersShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): DataSnowflakeMcpServersMcpServersShowOutputOutputReference {
    return new DataSnowflakeMcpServersMcpServersShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeMcpServersMcpServers {
}

export function dataSnowflakeMcpServersMcpServersToTerraform(struct?: DataSnowflakeMcpServersMcpServers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeMcpServersMcpServersToHclTerraform(struct?: DataSnowflakeMcpServersMcpServers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeMcpServersMcpServersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSnowflakeMcpServersMcpServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeMcpServersMcpServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new DataSnowflakeMcpServersMcpServersDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new DataSnowflakeMcpServersMcpServersShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }
}

export class DataSnowflakeMcpServersMcpServersList extends cdktn.ComplexList {

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
  public get(index: number): DataSnowflakeMcpServersMcpServersOutputReference {
    return new DataSnowflakeMcpServersMcpServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeMcpServersIn {
  /**
  * Returns records for the entire account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers#account DataSnowflakeMcpServers#account}
  */
  readonly account?: boolean | cdktn.IResolvable;
  /**
  * Returns records for the current database in use or for a specified database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers#database DataSnowflakeMcpServers#database}
  */
  readonly database?: string;
  /**
  * Returns records for the current schema in use or a specified schema. Use fully qualified name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers#schema DataSnowflakeMcpServers#schema}
  */
  readonly schema?: string;
}

export function dataSnowflakeMcpServersInToTerraform(struct?: DataSnowflakeMcpServersInOutputReference | DataSnowflakeMcpServersIn): any {
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


export function dataSnowflakeMcpServersInToHclTerraform(struct?: DataSnowflakeMcpServersInOutputReference | DataSnowflakeMcpServersIn): any {
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

export class DataSnowflakeMcpServersInOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSnowflakeMcpServersIn | undefined {
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

  public set internalValue(value: DataSnowflakeMcpServersIn | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers snowflake_mcp_servers}
*/
export class DataSnowflakeMcpServers extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_mcp_servers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataSnowflakeMcpServers resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakeMcpServers to import
  * @param importFromId The id of the existing DataSnowflakeMcpServers that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeMcpServers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_mcp_servers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers snowflake_mcp_servers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeMcpServersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeMcpServersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_mcp_servers',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.20.0',
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

  // mcp_servers - computed: true, optional: false, required: false
  private _mcpServers = new DataSnowflakeMcpServersMcpServersList(this, "mcp_servers", false);
  public get mcpServers() {
    return this._mcpServers;
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
  private _in = new DataSnowflakeMcpServersInOutputReference(this, "in");
  public get in() {
    return this._in;
  }
  public putIn(value: DataSnowflakeMcpServersIn) {
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
      in: dataSnowflakeMcpServersInToTerraform(this._in.internalValue),
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
        value: dataSnowflakeMcpServersInToHclTerraform(this._in.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSnowflakeMcpServersInList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
