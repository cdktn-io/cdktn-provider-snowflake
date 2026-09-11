/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OpenflowRuntimeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies a comment for the Openflow runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#comment OpenflowRuntime#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the Openflow runtime. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#database OpenflowRuntime#database}
  */
  readonly database: string;
  /**
  * Specifies the Openflow deployment the runtime runs in. Snowflake has no ALTER for it, so changing it recreates the runtime. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#deployment OpenflowRuntime#deployment}
  */
  readonly deployment: string;
  /**
  * A free-text alias for the runtime. Shown in the Openflow UI in place of the runtime's identifier when set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#display_name OpenflowRuntime#display_name}
  */
  readonly displayName?: string;
  /**
  * Specifies the role the runtime executes as. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#execute_as_role OpenflowRuntime#execute_as_role}
  */
  readonly executeAsRole: string;
  /**
  * Specifies the names of the external access integrations that allow the runtime egress to external data sources. Supported for Snowflake-managed deployments only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#external_access_integrations OpenflowRuntime#external_access_integrations}
  */
  readonly externalAccessIntegrations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#id OpenflowRuntime#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the maximum number of nodes the runtime scales up to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#max_nodes OpenflowRuntime#max_nodes}
  */
  readonly maxNodes: number;
  /**
  * Specifies the minimum number of nodes the runtime scales down to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#min_nodes OpenflowRuntime#min_nodes}
  */
  readonly minNodes: number;
  /**
  * Specifies the identifier for the Openflow runtime; must be unique for the schema in which the runtime is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#name OpenflowRuntime#name}
  */
  readonly name: string;
  /**
  * Specifies the size of the runtime's nodes. Snowflake has no ALTER for it, so changing it recreates the runtime. Valid values are (case-insensitive): `SMALL` | `MEDIUM` | `LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#node_type OpenflowRuntime#node_type}
  */
  readonly nodeType: string;
  /**
  * The schema in which to create the Openflow runtime. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#schema OpenflowRuntime#schema}
  */
  readonly schema: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#timeouts OpenflowRuntime#timeouts}
  */
  readonly timeouts?: OpenflowRuntimeTimeouts;
}
export interface OpenflowRuntimeDescribeOutput {
}

export function openflowRuntimeDescribeOutputToTerraform(struct?: OpenflowRuntimeDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function openflowRuntimeDescribeOutputToHclTerraform(struct?: OpenflowRuntimeDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OpenflowRuntimeDescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpenflowRuntimeDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenflowRuntimeDescribeOutput | undefined) {
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

  // deployment - computed: true, optional: false, required: false
  public get deployment() {
    return this.getStringAttribute('deployment');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // execute_as_role - computed: true, optional: false, required: false
  public get executeAsRole() {
    return this.getStringAttribute('execute_as_role');
  }

  // external_access_integrations - computed: true, optional: false, required: false
  public get externalAccessIntegrations() {
    return cdktn.Fn.tolist(this.getListAttribute('external_access_integrations'));
  }

  // initially_suspended - computed: true, optional: false, required: false
  public get initiallySuspended() {
    return this.getBooleanAttribute('initially_suspended');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // max_nodes - computed: true, optional: false, required: false
  public get maxNodes() {
    return this.getNumberAttribute('max_nodes');
  }

  // min_nodes - computed: true, optional: false, required: false
  public get minNodes() {
    return this.getNumberAttribute('min_nodes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // node_type_tier - computed: true, optional: false, required: false
  public get nodeTypeTier() {
    return this.getStringAttribute('node_type_tier');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // server_url - computed: true, optional: false, required: false
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class OpenflowRuntimeDescribeOutputList extends cdktn.ComplexList {

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
  public get(index: number): OpenflowRuntimeDescribeOutputOutputReference {
    return new OpenflowRuntimeDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenflowRuntimeShowOutput {
}

export function openflowRuntimeShowOutputToTerraform(struct?: OpenflowRuntimeShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function openflowRuntimeShowOutputToHclTerraform(struct?: OpenflowRuntimeShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OpenflowRuntimeShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpenflowRuntimeShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenflowRuntimeShowOutput | undefined) {
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

  // deployment - computed: true, optional: false, required: false
  public get deployment() {
    return this.getStringAttribute('deployment');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // execute_as_role - computed: true, optional: false, required: false
  public get executeAsRole() {
    return this.getStringAttribute('execute_as_role');
  }

  // external_access_integrations - computed: true, optional: false, required: false
  public get externalAccessIntegrations() {
    return cdktn.Fn.tolist(this.getListAttribute('external_access_integrations'));
  }

  // initially_suspended - computed: true, optional: false, required: false
  public get initiallySuspended() {
    return this.getBooleanAttribute('initially_suspended');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // max_nodes - computed: true, optional: false, required: false
  public get maxNodes() {
    return this.getNumberAttribute('max_nodes');
  }

  // min_nodes - computed: true, optional: false, required: false
  public get minNodes() {
    return this.getNumberAttribute('min_nodes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
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

export class OpenflowRuntimeShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): OpenflowRuntimeShowOutputOutputReference {
    return new OpenflowRuntimeShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenflowRuntimeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#create OpenflowRuntime#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#delete OpenflowRuntime#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#read OpenflowRuntime#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#update OpenflowRuntime#update}
  */
  readonly update?: string;
}

export function openflowRuntimeTimeoutsToTerraform(struct?: OpenflowRuntimeTimeouts | cdktn.IResolvable): any {
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


export function openflowRuntimeTimeoutsToHclTerraform(struct?: OpenflowRuntimeTimeouts | cdktn.IResolvable): any {
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

export class OpenflowRuntimeTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpenflowRuntimeTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: OpenflowRuntimeTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime snowflake_openflow_runtime}
*/
export class OpenflowRuntime extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_openflow_runtime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OpenflowRuntime resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenflowRuntime to import
  * @param importFromId The id of the existing OpenflowRuntime that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenflowRuntime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_openflow_runtime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime snowflake_openflow_runtime} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenflowRuntimeConfig
  */
  public constructor(scope: Construct, id: string, config: OpenflowRuntimeConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_openflow_runtime',
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
    this._comment = config.comment;
    this._database = config.database;
    this._deployment = config.deployment;
    this._displayName = config.displayName;
    this._executeAsRole = config.executeAsRole;
    this._externalAccessIntegrations = config.externalAccessIntegrations;
    this._id = config.id;
    this._maxNodes = config.maxNodes;
    this._minNodes = config.minNodes;
    this._name = config.name;
    this._nodeType = config.nodeType;
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

  // deployment - computed: false, optional: false, required: true
  private _deployment?: string; 
  public get deployment() {
    return this.getStringAttribute('deployment');
  }
  public set deployment(value: string) {
    this._deployment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment;
  }

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new OpenflowRuntimeDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // execute_as_role - computed: false, optional: false, required: true
  private _executeAsRole?: string; 
  public get executeAsRole() {
    return this.getStringAttribute('execute_as_role');
  }
  public set executeAsRole(value: string) {
    this._executeAsRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executeAsRoleInput() {
    return this._executeAsRole;
  }

  // external_access_integrations - computed: false, optional: true, required: false
  private _externalAccessIntegrations?: string[]; 
  public get externalAccessIntegrations() {
    return cdktn.Fn.tolist(this.getListAttribute('external_access_integrations'));
  }
  public set externalAccessIntegrations(value: string[]) {
    this._externalAccessIntegrations = value;
  }
  public resetExternalAccessIntegrations() {
    this._externalAccessIntegrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccessIntegrationsInput() {
    return this._externalAccessIntegrations;
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

  // max_nodes - computed: false, optional: false, required: true
  private _maxNodes?: number; 
  public get maxNodes() {
    return this.getNumberAttribute('max_nodes');
  }
  public set maxNodes(value: number) {
    this._maxNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodesInput() {
    return this._maxNodes;
  }

  // min_nodes - computed: false, optional: false, required: true
  private _minNodes?: number; 
  public get minNodes() {
    return this.getNumberAttribute('min_nodes');
  }
  public set minNodes(value: number) {
    this._minNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodesInput() {
    return this._minNodes;
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

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
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
  private _showOutput = new OpenflowRuntimeShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OpenflowRuntimeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OpenflowRuntimeTimeouts) {
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
      deployment: cdktn.stringToTerraform(this._deployment),
      display_name: cdktn.stringToTerraform(this._displayName),
      execute_as_role: cdktn.stringToTerraform(this._executeAsRole),
      external_access_integrations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._externalAccessIntegrations),
      id: cdktn.stringToTerraform(this._id),
      max_nodes: cdktn.numberToTerraform(this._maxNodes),
      min_nodes: cdktn.numberToTerraform(this._minNodes),
      name: cdktn.stringToTerraform(this._name),
      node_type: cdktn.stringToTerraform(this._nodeType),
      schema: cdktn.stringToTerraform(this._schema),
      timeouts: openflowRuntimeTimeoutsToTerraform(this._timeouts.internalValue),
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
      deployment: {
        value: cdktn.stringToHclTerraform(this._deployment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execute_as_role: {
        value: cdktn.stringToHclTerraform(this._executeAsRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_access_integrations: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._externalAccessIntegrations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_nodes: {
        value: cdktn.numberToHclTerraform(this._maxNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_nodes: {
        value: cdktn.numberToHclTerraform(this._minNodes),
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
      node_type: {
        value: cdktn.stringToHclTerraform(this._nodeType),
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
      timeouts: {
        value: openflowRuntimeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpenflowRuntimeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
