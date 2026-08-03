/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IcebergTableFromAwsGlueConfig extends cdktn.TerraformMetaArguments {
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should periodically refresh the Iceberg table metadata from the AWS Glue catalog. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#auto_refresh IcebergTableFromAwsGlue#auto_refresh}
  */
  readonly autoRefresh?: string;
  /**
  * Specifies the identifier for the catalog integration to use for the Iceberg table. If not specified, the account-level default is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#catalog IcebergTableFromAwsGlue#catalog}
  */
  readonly catalog?: string;
  /**
  * Specifies the namespace (or database) in the AWS Glue catalog that the table belongs to. If not specified, the catalog integration's default namespace is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#catalog_namespace IcebergTableFromAwsGlue#catalog_namespace}
  */
  readonly catalogNamespace?: string;
  /**
  * Specifies the name of the table as it appears in the AWS Glue catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#catalog_table_name IcebergTableFromAwsGlue#catalog_table_name}
  */
  readonly catalogTableName: string;
  /**
  * Specifies a comment for the Iceberg table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#comment IcebergTableFromAwsGlue#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the Iceberg table. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#database IcebergTableFromAwsGlue#database}
  */
  readonly database: string;
  /**
  * Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. If not specified, the account-level default is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#external_volume IcebergTableFromAwsGlue#external_volume}
  */
  readonly externalVolume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#id IcebergTableFromAwsGlue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier for the Iceberg table; must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#name IcebergTableFromAwsGlue#name}
  */
  readonly name: string;
  /**
  * Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#replace_invalid_characters IcebergTableFromAwsGlue#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: boolean | cdktn.IResolvable;
  /**
  * The schema in which to create the Iceberg table. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#schema IcebergTableFromAwsGlue#schema}
  */
  readonly schema: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#timeouts IcebergTableFromAwsGlue#timeouts}
  */
  readonly timeouts?: IcebergTableFromAwsGlueTimeouts;
}
export interface IcebergTableFromAwsGlueDescribeOutput {
}

export function icebergTableFromAwsGlueDescribeOutputToTerraform(struct?: IcebergTableFromAwsGlueDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableFromAwsGlueDescribeOutputToHclTerraform(struct?: IcebergTableFromAwsGlueDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableFromAwsGlueDescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableFromAwsGlueDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableFromAwsGlueDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // check - computed: true, optional: false, required: false
  public get check() {
    return this.getStringAttribute('check');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // is_nullable - computed: true, optional: false, required: false
  public get isNullable() {
    return this.getBooleanAttribute('is_nullable');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_mapping - computed: true, optional: false, required: false
  public get nameMapping() {
    return this.getStringAttribute('name_mapping');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }

  // privacy_domain - computed: true, optional: false, required: false
  public get privacyDomain() {
    return this.getStringAttribute('privacy_domain');
  }

  // source_iceberg_type - computed: true, optional: false, required: false
  public get sourceIcebergType() {
    return this.getStringAttribute('source_iceberg_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unique_key - computed: true, optional: false, required: false
  public get uniqueKey() {
    return this.getBooleanAttribute('unique_key');
  }

  // write_default - computed: true, optional: false, required: false
  public get writeDefault() {
    return this.getStringAttribute('write_default');
  }
}

export class IcebergTableFromAwsGlueDescribeOutputList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableFromAwsGlueDescribeOutputOutputReference {
    return new IcebergTableFromAwsGlueDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableFromAwsGlueParametersCatalog {
}

export function icebergTableFromAwsGlueParametersCatalogToTerraform(struct?: IcebergTableFromAwsGlueParametersCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableFromAwsGlueParametersCatalogToHclTerraform(struct?: IcebergTableFromAwsGlueParametersCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableFromAwsGlueParametersCatalogOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableFromAwsGlueParametersCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableFromAwsGlueParametersCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IcebergTableFromAwsGlueParametersCatalogList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableFromAwsGlueParametersCatalogOutputReference {
    return new IcebergTableFromAwsGlueParametersCatalogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableFromAwsGlueParametersExternalVolume {
}

export function icebergTableFromAwsGlueParametersExternalVolumeToTerraform(struct?: IcebergTableFromAwsGlueParametersExternalVolume): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableFromAwsGlueParametersExternalVolumeToHclTerraform(struct?: IcebergTableFromAwsGlueParametersExternalVolume): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableFromAwsGlueParametersExternalVolumeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableFromAwsGlueParametersExternalVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableFromAwsGlueParametersExternalVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IcebergTableFromAwsGlueParametersExternalVolumeList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableFromAwsGlueParametersExternalVolumeOutputReference {
    return new IcebergTableFromAwsGlueParametersExternalVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableFromAwsGlueParametersReplaceInvalidCharacters {
}

export function icebergTableFromAwsGlueParametersReplaceInvalidCharactersToTerraform(struct?: IcebergTableFromAwsGlueParametersReplaceInvalidCharacters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableFromAwsGlueParametersReplaceInvalidCharactersToHclTerraform(struct?: IcebergTableFromAwsGlueParametersReplaceInvalidCharacters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableFromAwsGlueParametersReplaceInvalidCharacters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableFromAwsGlueParametersReplaceInvalidCharacters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference {
    return new IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableFromAwsGlueParameters {
}

export function icebergTableFromAwsGlueParametersToTerraform(struct?: IcebergTableFromAwsGlueParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableFromAwsGlueParametersToHclTerraform(struct?: IcebergTableFromAwsGlueParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableFromAwsGlueParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableFromAwsGlueParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableFromAwsGlueParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  private _catalog = new IcebergTableFromAwsGlueParametersCatalogList(this, "catalog", false);
  public get catalog() {
    return this._catalog;
  }

  // external_volume - computed: true, optional: false, required: false
  private _externalVolume = new IcebergTableFromAwsGlueParametersExternalVolumeList(this, "external_volume", false);
  public get externalVolume() {
    return this._externalVolume;
  }

  // replace_invalid_characters - computed: true, optional: false, required: false
  private _replaceInvalidCharacters = new IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList(this, "replace_invalid_characters", false);
  public get replaceInvalidCharacters() {
    return this._replaceInvalidCharacters;
  }
}

export class IcebergTableFromAwsGlueParametersList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableFromAwsGlueParametersOutputReference {
    return new IcebergTableFromAwsGlueParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableFromAwsGlueShowOutputAutoRefreshStatus {
}

export function icebergTableFromAwsGlueShowOutputAutoRefreshStatusToTerraform(struct?: IcebergTableFromAwsGlueShowOutputAutoRefreshStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableFromAwsGlueShowOutputAutoRefreshStatusToHclTerraform(struct?: IcebergTableFromAwsGlueShowOutputAutoRefreshStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableFromAwsGlueShowOutputAutoRefreshStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableFromAwsGlueShowOutputAutoRefreshStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_snapshot_id - computed: true, optional: false, required: false
  public get currentSnapshotId() {
    return this.getNumberAttribute('current_snapshot_id');
  }

  // execution_state - computed: true, optional: false, required: false
  public get executionState() {
    return this.getStringAttribute('execution_state');
  }

  // last_snapshot_time - computed: true, optional: false, required: false
  public get lastSnapshotTime() {
    return this.getStringAttribute('last_snapshot_time');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // pending_snapshot_count - computed: true, optional: false, required: false
  public get pendingSnapshotCount() {
    return this.getNumberAttribute('pending_snapshot_count');
  }
}

export class IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference {
    return new IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableFromAwsGlueShowOutputPartitionSpecsFields {
}

export function icebergTableFromAwsGlueShowOutputPartitionSpecsFieldsToTerraform(struct?: IcebergTableFromAwsGlueShowOutputPartitionSpecsFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableFromAwsGlueShowOutputPartitionSpecsFieldsToHclTerraform(struct?: IcebergTableFromAwsGlueShowOutputPartitionSpecsFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableFromAwsGlueShowOutputPartitionSpecsFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableFromAwsGlueShowOutputPartitionSpecsFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getNumberAttribute('field_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getNumberAttribute('source_id');
  }

  // transform - computed: true, optional: false, required: false
  public get transform() {
    return this.getStringAttribute('transform');
  }
}

export class IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference {
    return new IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableFromAwsGlueShowOutputPartitionSpecs {
}

export function icebergTableFromAwsGlueShowOutputPartitionSpecsToTerraform(struct?: IcebergTableFromAwsGlueShowOutputPartitionSpecs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableFromAwsGlueShowOutputPartitionSpecsToHclTerraform(struct?: IcebergTableFromAwsGlueShowOutputPartitionSpecs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableFromAwsGlueShowOutputPartitionSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableFromAwsGlueShowOutputPartitionSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fields - computed: true, optional: false, required: false
  private _fields = new IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }

  // spec_id - computed: true, optional: false, required: false
  public get specId() {
    return this.getNumberAttribute('spec_id');
  }
}

export class IcebergTableFromAwsGlueShowOutputPartitionSpecsList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference {
    return new IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableFromAwsGlueShowOutput {
}

export function icebergTableFromAwsGlueShowOutputToTerraform(struct?: IcebergTableFromAwsGlueShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableFromAwsGlueShowOutputToHclTerraform(struct?: IcebergTableFromAwsGlueShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableFromAwsGlueShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableFromAwsGlueShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableFromAwsGlueShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_refresh_status - computed: true, optional: false, required: false
  private _autoRefreshStatus = new IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList(this, "auto_refresh_status", false);
  public get autoRefreshStatus() {
    return this._autoRefreshStatus;
  }

  // base_location - computed: true, optional: false, required: false
  public get baseLocation() {
    return this.getStringAttribute('base_location');
  }

  // can_write_metadata - computed: true, optional: false, required: false
  public get canWriteMetadata() {
    return this.getBooleanAttribute('can_write_metadata');
  }

  // catalog_name - computed: true, optional: false, required: false
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }

  // catalog_namespace - computed: true, optional: false, required: false
  public get catalogNamespace() {
    return this.getStringAttribute('catalog_namespace');
  }

  // catalog_sync_name - computed: true, optional: false, required: false
  public get catalogSyncName() {
    return this.getStringAttribute('catalog_sync_name');
  }

  // catalog_table_name - computed: true, optional: false, required: false
  public get catalogTableName() {
    return this.getStringAttribute('catalog_table_name');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // current_partition_spec_id - computed: true, optional: false, required: false
  public get currentPartitionSpecId() {
    return this.getNumberAttribute('current_partition_spec_id');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // external_volume_name - computed: true, optional: false, required: false
  public get externalVolumeName() {
    return this.getStringAttribute('external_volume_name');
  }

  // iceberg_table_format_version - computed: true, optional: false, required: false
  public get icebergTableFormatVersion() {
    return this.getNumberAttribute('iceberg_table_format_version');
  }

  // iceberg_table_type - computed: true, optional: false, required: false
  public get icebergTableType() {
    return this.getStringAttribute('iceberg_table_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_mapping - computed: true, optional: false, required: false
  public get nameMapping() {
    return this.getStringAttribute('name_mapping');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // owner_role_type - computed: true, optional: false, required: false
  public get ownerRoleType() {
    return this.getStringAttribute('owner_role_type');
  }

  // partition_specs - computed: true, optional: false, required: false
  private _partitionSpecs = new IcebergTableFromAwsGlueShowOutputPartitionSpecsList(this, "partition_specs", false);
  public get partitionSpecs() {
    return this._partitionSpecs;
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
}

export class IcebergTableFromAwsGlueShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableFromAwsGlueShowOutputOutputReference {
    return new IcebergTableFromAwsGlueShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableFromAwsGlueTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#create IcebergTableFromAwsGlue#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#delete IcebergTableFromAwsGlue#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#read IcebergTableFromAwsGlue#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#update IcebergTableFromAwsGlue#update}
  */
  readonly update?: string;
}

export function icebergTableFromAwsGlueTimeoutsToTerraform(struct?: IcebergTableFromAwsGlueTimeouts | cdktn.IResolvable): any {
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


export function icebergTableFromAwsGlueTimeoutsToHclTerraform(struct?: IcebergTableFromAwsGlueTimeouts | cdktn.IResolvable): any {
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

export class IcebergTableFromAwsGlueTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IcebergTableFromAwsGlueTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IcebergTableFromAwsGlueTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue snowflake_iceberg_table_from_aws_glue}
*/
export class IcebergTableFromAwsGlue extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_iceberg_table_from_aws_glue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IcebergTableFromAwsGlue resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IcebergTableFromAwsGlue to import
  * @param importFromId The id of the existing IcebergTableFromAwsGlue that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IcebergTableFromAwsGlue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_iceberg_table_from_aws_glue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue snowflake_iceberg_table_from_aws_glue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IcebergTableFromAwsGlueConfig
  */
  public constructor(scope: Construct, id: string, config: IcebergTableFromAwsGlueConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_iceberg_table_from_aws_glue',
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
    this._autoRefresh = config.autoRefresh;
    this._catalog = config.catalog;
    this._catalogNamespace = config.catalogNamespace;
    this._catalogTableName = config.catalogTableName;
    this._comment = config.comment;
    this._database = config.database;
    this._externalVolume = config.externalVolume;
    this._id = config.id;
    this._name = config.name;
    this._replaceInvalidCharacters = config.replaceInvalidCharacters;
    this._schema = config.schema;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_refresh - computed: false, optional: true, required: false
  private _autoRefresh?: string; 
  public get autoRefresh() {
    return this.getStringAttribute('auto_refresh');
  }
  public set autoRefresh(value: string) {
    this._autoRefresh = value;
  }
  public resetAutoRefresh() {
    this._autoRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRefreshInput() {
    return this._autoRefresh;
  }

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

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

  // catalog_table_name - computed: false, optional: false, required: true
  private _catalogTableName?: string; 
  public get catalogTableName() {
    return this.getStringAttribute('catalog_table_name');
  }
  public set catalogTableName(value: string) {
    this._catalogTableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTableNameInput() {
    return this._catalogTableName;
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

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new IcebergTableFromAwsGlueDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // external_volume - computed: true, optional: true, required: false
  private _externalVolume?: string; 
  public get externalVolume() {
    return this.getStringAttribute('external_volume');
  }
  public set externalVolume(value: string) {
    this._externalVolume = value;
  }
  public resetExternalVolume() {
    this._externalVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalVolumeInput() {
    return this._externalVolume;
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

  // parameters - computed: true, optional: false, required: false
  private _parameters = new IcebergTableFromAwsGlueParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // replace_invalid_characters - computed: true, optional: true, required: false
  private _replaceInvalidCharacters?: boolean | cdktn.IResolvable; 
  public get replaceInvalidCharacters() {
    return this.getBooleanAttribute('replace_invalid_characters');
  }
  public set replaceInvalidCharacters(value: boolean | cdktn.IResolvable) {
    this._replaceInvalidCharacters = value;
  }
  public resetReplaceInvalidCharacters() {
    this._replaceInvalidCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidCharactersInput() {
    return this._replaceInvalidCharacters;
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
  private _showOutput = new IcebergTableFromAwsGlueShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IcebergTableFromAwsGlueTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IcebergTableFromAwsGlueTimeouts) {
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
      auto_refresh: cdktn.stringToTerraform(this._autoRefresh),
      catalog: cdktn.stringToTerraform(this._catalog),
      catalog_namespace: cdktn.stringToTerraform(this._catalogNamespace),
      catalog_table_name: cdktn.stringToTerraform(this._catalogTableName),
      comment: cdktn.stringToTerraform(this._comment),
      database: cdktn.stringToTerraform(this._database),
      external_volume: cdktn.stringToTerraform(this._externalVolume),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      replace_invalid_characters: cdktn.booleanToTerraform(this._replaceInvalidCharacters),
      schema: cdktn.stringToTerraform(this._schema),
      timeouts: icebergTableFromAwsGlueTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_refresh: {
        value: cdktn.stringToHclTerraform(this._autoRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog: {
        value: cdktn.stringToHclTerraform(this._catalog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog_namespace: {
        value: cdktn.stringToHclTerraform(this._catalogNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog_table_name: {
        value: cdktn.stringToHclTerraform(this._catalogTableName),
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
      database: {
        value: cdktn.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_volume: {
        value: cdktn.stringToHclTerraform(this._externalVolume),
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
      replace_invalid_characters: {
        value: cdktn.booleanToHclTerraform(this._replaceInvalidCharacters),
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
        value: icebergTableFromAwsGlueTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IcebergTableFromAwsGlueTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
