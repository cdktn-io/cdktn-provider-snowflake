/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CatalogIntegrationAwsGlueConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies the default AWS Glue Data Catalog namespace for all Iceberg tables that you associate with the catalog integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#catalog_namespace CatalogIntegrationAwsGlue#catalog_namespace}
  */
  readonly catalogNamespace?: string;
  /**
  * (Default: ``) Specifies a comment for the catalog integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#comment CatalogIntegrationAwsGlue#comment}
  */
  readonly comment?: string;
  /**
  * Specifies whether the catalog integration is available for use for Iceberg tables. `true` allows users to create new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration function normally. `false` prevents users from creating new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration cannot access the catalog in the table definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#enabled CatalogIntegrationAwsGlue#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Specifies the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#glue_aws_role_arn CatalogIntegrationAwsGlue#glue_aws_role_arn}
  */
  readonly glueAwsRoleArn: string;
  /**
  * Specifies the ID of your AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#glue_catalog_id CatalogIntegrationAwsGlue#glue_catalog_id}
  */
  readonly glueCatalogId: string;
  /**
  * Specifies the AWS region of your AWS Glue Data Catalog. You must specify a value for this attribute if your Snowflake account is not hosted on AWS. Otherwise, the default region is the Snowflake deployment region for the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#glue_region CatalogIntegrationAwsGlue#glue_region}
  */
  readonly glueRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#id CatalogIntegrationAwsGlue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#name CatalogIntegrationAwsGlue#name}
  */
  readonly name: string;
  /**
  * Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh. For Delta-based tables, specifies the number of seconds to wait between attempts to poll your external cloud storage for new metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#refresh_interval_seconds CatalogIntegrationAwsGlue#refresh_interval_seconds}
  */
  readonly refreshIntervalSeconds?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#timeouts CatalogIntegrationAwsGlue#timeouts}
  */
  readonly timeouts?: CatalogIntegrationAwsGlueTimeouts;
}
export interface CatalogIntegrationAwsGlueDescribeOutput {
}

export function catalogIntegrationAwsGlueDescribeOutputToTerraform(struct?: CatalogIntegrationAwsGlueDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function catalogIntegrationAwsGlueDescribeOutputToHclTerraform(struct?: CatalogIntegrationAwsGlueDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CatalogIntegrationAwsGlueDescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CatalogIntegrationAwsGlueDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogIntegrationAwsGlueDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog_namespace - computed: true, optional: false, required: false
  public get catalogNamespace() {
    return this.getStringAttribute('catalog_namespace');
  }

  // catalog_source - computed: true, optional: false, required: false
  public get catalogSource() {
    return this.getStringAttribute('catalog_source');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // glue_aws_role_arn - computed: true, optional: false, required: false
  public get glueAwsRoleArn() {
    return this.getStringAttribute('glue_aws_role_arn');
  }

  // glue_catalog_id - computed: true, optional: false, required: false
  public get glueCatalogId() {
    return this.getStringAttribute('glue_catalog_id');
  }

  // glue_region - computed: true, optional: false, required: false
  public get glueRegion() {
    return this.getStringAttribute('glue_region');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // refresh_interval_seconds - computed: true, optional: false, required: false
  public get refreshIntervalSeconds() {
    return this.getNumberAttribute('refresh_interval_seconds');
  }

  // table_format - computed: true, optional: false, required: false
  public get tableFormat() {
    return this.getStringAttribute('table_format');
  }
}

export class CatalogIntegrationAwsGlueDescribeOutputList extends cdktn.ComplexList {

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
  public get(index: number): CatalogIntegrationAwsGlueDescribeOutputOutputReference {
    return new CatalogIntegrationAwsGlueDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CatalogIntegrationAwsGlueShowOutput {
}

export function catalogIntegrationAwsGlueShowOutputToTerraform(struct?: CatalogIntegrationAwsGlueShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function catalogIntegrationAwsGlueShowOutputToHclTerraform(struct?: CatalogIntegrationAwsGlueShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CatalogIntegrationAwsGlueShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CatalogIntegrationAwsGlueShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogIntegrationAwsGlueShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class CatalogIntegrationAwsGlueShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): CatalogIntegrationAwsGlueShowOutputOutputReference {
    return new CatalogIntegrationAwsGlueShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CatalogIntegrationAwsGlueTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#create CatalogIntegrationAwsGlue#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#delete CatalogIntegrationAwsGlue#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#read CatalogIntegrationAwsGlue#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#update CatalogIntegrationAwsGlue#update}
  */
  readonly update?: string;
}

export function catalogIntegrationAwsGlueTimeoutsToTerraform(struct?: CatalogIntegrationAwsGlueTimeouts | cdktn.IResolvable): any {
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


export function catalogIntegrationAwsGlueTimeoutsToHclTerraform(struct?: CatalogIntegrationAwsGlueTimeouts | cdktn.IResolvable): any {
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

export class CatalogIntegrationAwsGlueTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CatalogIntegrationAwsGlueTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CatalogIntegrationAwsGlueTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue snowflake_catalog_integration_aws_glue}
*/
export class CatalogIntegrationAwsGlue extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_catalog_integration_aws_glue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CatalogIntegrationAwsGlue resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatalogIntegrationAwsGlue to import
  * @param importFromId The id of the existing CatalogIntegrationAwsGlue that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatalogIntegrationAwsGlue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_catalog_integration_aws_glue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue snowflake_catalog_integration_aws_glue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatalogIntegrationAwsGlueConfig
  */
  public constructor(scope: Construct, id: string, config: CatalogIntegrationAwsGlueConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_catalog_integration_aws_glue',
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
    this._catalogNamespace = config.catalogNamespace;
    this._comment = config.comment;
    this._enabled = config.enabled;
    this._glueAwsRoleArn = config.glueAwsRoleArn;
    this._glueCatalogId = config.glueCatalogId;
    this._glueRegion = config.glueRegion;
    this._id = config.id;
    this._name = config.name;
    this._refreshIntervalSeconds = config.refreshIntervalSeconds;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_namespace - computed: false, optional: true, required: false
  private _catalogNamespace?: string; 
  public get catalogNamespace() {
    return this.getStringAttribute('catalog_namespace');
  }
  public set catalogNamespace(value: string) {
    this._catalogNamespace = value;
  }
  public resetCatalogNamespace() {
    this._catalogNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNamespaceInput() {
    return this._catalogNamespace;
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
  private _describeOutput = new CatalogIntegrationAwsGlueDescribeOutputList(this, "describe_output", false);
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

  // glue_aws_role_arn - computed: false, optional: false, required: true
  private _glueAwsRoleArn?: string; 
  public get glueAwsRoleArn() {
    return this.getStringAttribute('glue_aws_role_arn');
  }
  public set glueAwsRoleArn(value: string) {
    this._glueAwsRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get glueAwsRoleArnInput() {
    return this._glueAwsRoleArn;
  }

  // glue_catalog_id - computed: false, optional: false, required: true
  private _glueCatalogId?: string; 
  public get glueCatalogId() {
    return this.getStringAttribute('glue_catalog_id');
  }
  public set glueCatalogId(value: string) {
    this._glueCatalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get glueCatalogIdInput() {
    return this._glueCatalogId;
  }

  // glue_region - computed: false, optional: true, required: false
  private _glueRegion?: string; 
  public get glueRegion() {
    return this.getStringAttribute('glue_region');
  }
  public set glueRegion(value: string) {
    this._glueRegion = value;
  }
  public resetGlueRegion() {
    this._glueRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueRegionInput() {
    return this._glueRegion;
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

  // refresh_interval_seconds - computed: false, optional: true, required: false
  private _refreshIntervalSeconds?: number; 
  public get refreshIntervalSeconds() {
    return this.getNumberAttribute('refresh_interval_seconds');
  }
  public set refreshIntervalSeconds(value: number) {
    this._refreshIntervalSeconds = value;
  }
  public resetRefreshIntervalSeconds() {
    this._refreshIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalSecondsInput() {
    return this._refreshIntervalSeconds;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new CatalogIntegrationAwsGlueShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CatalogIntegrationAwsGlueTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CatalogIntegrationAwsGlueTimeouts) {
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
      catalog_namespace: cdktn.stringToTerraform(this._catalogNamespace),
      comment: cdktn.stringToTerraform(this._comment),
      enabled: cdktn.booleanToTerraform(this._enabled),
      glue_aws_role_arn: cdktn.stringToTerraform(this._glueAwsRoleArn),
      glue_catalog_id: cdktn.stringToTerraform(this._glueCatalogId),
      glue_region: cdktn.stringToTerraform(this._glueRegion),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      refresh_interval_seconds: cdktn.numberToTerraform(this._refreshIntervalSeconds),
      timeouts: catalogIntegrationAwsGlueTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_namespace: {
        value: cdktn.stringToHclTerraform(this._catalogNamespace),
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
      glue_aws_role_arn: {
        value: cdktn.stringToHclTerraform(this._glueAwsRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glue_catalog_id: {
        value: cdktn.stringToHclTerraform(this._glueCatalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glue_region: {
        value: cdktn.stringToHclTerraform(this._glueRegion),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_interval_seconds: {
        value: cdktn.numberToHclTerraform(this._refreshIntervalSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: catalogIntegrationAwsGlueTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CatalogIntegrationAwsGlueTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
