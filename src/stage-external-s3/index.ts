/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface StageExternalS3Config extends cdktn.TerraformMetaArguments {
  /**
  * Specifies the ARN for an AWS S3 Access Point to use for data transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#aws_access_point_arn StageExternalS3#aws_access_point_arn}
  */
  readonly awsAccessPointArn?: string;
  /**
  * Specifies a comment for the stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#comment StageExternalS3#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the stage. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#database StageExternalS3#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#id StageExternalS3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier for the stage; must be unique for the database and schema in which the stage is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#name StageExternalS3#name}
  */
  readonly name: string;
  /**
  * The schema in which to create the stage. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#schema StageExternalS3#schema}
  */
  readonly schema: string;
  /**
  * Specifies the name of the storage integration used to delegate authentication responsibility to a Snowflake identity. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#storage_integration StageExternalS3#storage_integration}
  */
  readonly storageIntegration?: string;
  /**
  * Specifies the URL for the S3 bucket (e.g., 's3://bucket-name/path/').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#url StageExternalS3#url}
  */
  readonly url: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to use a private link endpoint for S3 storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#use_privatelink_endpoint StageExternalS3#use_privatelink_endpoint}
  */
  readonly usePrivatelinkEndpoint?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#credentials StageExternalS3#credentials}
  */
  readonly credentials?: StageExternalS3Credentials;
  /**
  * directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#directory StageExternalS3#directory}
  */
  readonly directory?: StageExternalS3Directory;
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#encryption StageExternalS3#encryption}
  */
  readonly encryption?: StageExternalS3Encryption;
  /**
  * file_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#file_format StageExternalS3#file_format}
  */
  readonly fileFormat?: StageExternalS3FileFormat;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#timeouts StageExternalS3#timeouts}
  */
  readonly timeouts?: StageExternalS3Timeouts;
}
export interface StageExternalS3DescribeOutputDirectoryTable {
}

export function stageExternalS3DescribeOutputDirectoryTableToTerraform(struct?: StageExternalS3DescribeOutputDirectoryTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalS3DescribeOutputDirectoryTableToHclTerraform(struct?: StageExternalS3DescribeOutputDirectoryTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalS3DescribeOutputDirectoryTableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StageExternalS3DescribeOutputDirectoryTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3DescribeOutputDirectoryTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_refresh - computed: true, optional: false, required: false
  public get autoRefresh() {
    return this.getBooleanAttribute('auto_refresh');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
}

export class StageExternalS3DescribeOutputDirectoryTableList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalS3DescribeOutputDirectoryTableOutputReference {
    return new StageExternalS3DescribeOutputDirectoryTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalS3DescribeOutputFileFormatAvro {
}

export function stageExternalS3DescribeOutputFileFormatAvroToTerraform(struct?: StageExternalS3DescribeOutputFileFormatAvro): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalS3DescribeOutputFileFormatAvroToHclTerraform(struct?: StageExternalS3DescribeOutputFileFormatAvro): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalS3DescribeOutputFileFormatAvroOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StageExternalS3DescribeOutputFileFormatAvro | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3DescribeOutputFileFormatAvro | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // null_if - computed: true, optional: false, required: false
  public get nullIf() {
    return this.getListAttribute('null_if');
  }

  // replace_invalid_characters - computed: true, optional: false, required: false
  public get replaceInvalidCharacters() {
    return this.getBooleanAttribute('replace_invalid_characters');
  }

  // trim_space - computed: true, optional: false, required: false
  public get trimSpace() {
    return this.getBooleanAttribute('trim_space');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class StageExternalS3DescribeOutputFileFormatAvroList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalS3DescribeOutputFileFormatAvroOutputReference {
    return new StageExternalS3DescribeOutputFileFormatAvroOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalS3DescribeOutputFileFormatCsv {
}

export function stageExternalS3DescribeOutputFileFormatCsvToTerraform(struct?: StageExternalS3DescribeOutputFileFormatCsv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalS3DescribeOutputFileFormatCsvToHclTerraform(struct?: StageExternalS3DescribeOutputFileFormatCsv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalS3DescribeOutputFileFormatCsvOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StageExternalS3DescribeOutputFileFormatCsv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3DescribeOutputFileFormatCsv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binary_format - computed: true, optional: false, required: false
  public get binaryFormat() {
    return this.getStringAttribute('binary_format');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // date_format - computed: true, optional: false, required: false
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }

  // empty_field_as_null - computed: true, optional: false, required: false
  public get emptyFieldAsNull() {
    return this.getBooleanAttribute('empty_field_as_null');
  }

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // error_on_column_count_mismatch - computed: true, optional: false, required: false
  public get errorOnColumnCountMismatch() {
    return this.getBooleanAttribute('error_on_column_count_mismatch');
  }

  // escape - computed: true, optional: false, required: false
  public get escape() {
    return this.getStringAttribute('escape');
  }

  // escape_unenclosed_field - computed: true, optional: false, required: false
  public get escapeUnenclosedField() {
    return this.getStringAttribute('escape_unenclosed_field');
  }

  // field_delimiter - computed: true, optional: false, required: false
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }

  // field_optionally_enclosed_by - computed: true, optional: false, required: false
  public get fieldOptionallyEnclosedBy() {
    return this.getStringAttribute('field_optionally_enclosed_by');
  }

  // file_extension - computed: true, optional: false, required: false
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }

  // multi_line - computed: true, optional: false, required: false
  public get multiLine() {
    return this.getBooleanAttribute('multi_line');
  }

  // null_if - computed: true, optional: false, required: false
  public get nullIf() {
    return this.getListAttribute('null_if');
  }

  // parse_header - computed: true, optional: false, required: false
  public get parseHeader() {
    return this.getBooleanAttribute('parse_header');
  }

  // record_delimiter - computed: true, optional: false, required: false
  public get recordDelimiter() {
    return this.getStringAttribute('record_delimiter');
  }

  // replace_invalid_characters - computed: true, optional: false, required: false
  public get replaceInvalidCharacters() {
    return this.getBooleanAttribute('replace_invalid_characters');
  }

  // skip_blank_lines - computed: true, optional: false, required: false
  public get skipBlankLines() {
    return this.getBooleanAttribute('skip_blank_lines');
  }

  // skip_byte_order_mark - computed: true, optional: false, required: false
  public get skipByteOrderMark() {
    return this.getBooleanAttribute('skip_byte_order_mark');
  }

  // skip_header - computed: true, optional: false, required: false
  public get skipHeader() {
    return this.getNumberAttribute('skip_header');
  }

  // time_format - computed: true, optional: false, required: false
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }

  // timestamp_format - computed: true, optional: false, required: false
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }

  // trim_space - computed: true, optional: false, required: false
  public get trimSpace() {
    return this.getBooleanAttribute('trim_space');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // validate_utf8 - computed: true, optional: false, required: false
  public get validateUtf8() {
    return this.getBooleanAttribute('validate_utf8');
  }
}

export class StageExternalS3DescribeOutputFileFormatCsvList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalS3DescribeOutputFileFormatCsvOutputReference {
    return new StageExternalS3DescribeOutputFileFormatCsvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalS3DescribeOutputFileFormatJson {
}

export function stageExternalS3DescribeOutputFileFormatJsonToTerraform(struct?: StageExternalS3DescribeOutputFileFormatJson): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalS3DescribeOutputFileFormatJsonToHclTerraform(struct?: StageExternalS3DescribeOutputFileFormatJson): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalS3DescribeOutputFileFormatJsonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StageExternalS3DescribeOutputFileFormatJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3DescribeOutputFileFormatJson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_duplicate - computed: true, optional: false, required: false
  public get allowDuplicate() {
    return this.getBooleanAttribute('allow_duplicate');
  }

  // binary_format - computed: true, optional: false, required: false
  public get binaryFormat() {
    return this.getStringAttribute('binary_format');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // date_format - computed: true, optional: false, required: false
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }

  // enable_octal - computed: true, optional: false, required: false
  public get enableOctal() {
    return this.getBooleanAttribute('enable_octal');
  }

  // file_extension - computed: true, optional: false, required: false
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }

  // ignore_utf8_errors - computed: true, optional: false, required: false
  public get ignoreUtf8Errors() {
    return this.getBooleanAttribute('ignore_utf8_errors');
  }

  // multi_line - computed: true, optional: false, required: false
  public get multiLine() {
    return this.getBooleanAttribute('multi_line');
  }

  // null_if - computed: true, optional: false, required: false
  public get nullIf() {
    return this.getListAttribute('null_if');
  }

  // replace_invalid_characters - computed: true, optional: false, required: false
  public get replaceInvalidCharacters() {
    return this.getBooleanAttribute('replace_invalid_characters');
  }

  // skip_byte_order_mark - computed: true, optional: false, required: false
  public get skipByteOrderMark() {
    return this.getBooleanAttribute('skip_byte_order_mark');
  }

  // strip_null_values - computed: true, optional: false, required: false
  public get stripNullValues() {
    return this.getBooleanAttribute('strip_null_values');
  }

  // strip_outer_array - computed: true, optional: false, required: false
  public get stripOuterArray() {
    return this.getBooleanAttribute('strip_outer_array');
  }

  // time_format - computed: true, optional: false, required: false
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }

  // timestamp_format - computed: true, optional: false, required: false
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }

  // trim_space - computed: true, optional: false, required: false
  public get trimSpace() {
    return this.getBooleanAttribute('trim_space');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class StageExternalS3DescribeOutputFileFormatJsonList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalS3DescribeOutputFileFormatJsonOutputReference {
    return new StageExternalS3DescribeOutputFileFormatJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalS3DescribeOutputFileFormatOrc {
}

export function stageExternalS3DescribeOutputFileFormatOrcToTerraform(struct?: StageExternalS3DescribeOutputFileFormatOrc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalS3DescribeOutputFileFormatOrcToHclTerraform(struct?: StageExternalS3DescribeOutputFileFormatOrc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalS3DescribeOutputFileFormatOrcOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StageExternalS3DescribeOutputFileFormatOrc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3DescribeOutputFileFormatOrc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // null_if - computed: true, optional: false, required: false
  public get nullIf() {
    return this.getListAttribute('null_if');
  }

  // replace_invalid_characters - computed: true, optional: false, required: false
  public get replaceInvalidCharacters() {
    return this.getBooleanAttribute('replace_invalid_characters');
  }

  // trim_space - computed: true, optional: false, required: false
  public get trimSpace() {
    return this.getBooleanAttribute('trim_space');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class StageExternalS3DescribeOutputFileFormatOrcList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalS3DescribeOutputFileFormatOrcOutputReference {
    return new StageExternalS3DescribeOutputFileFormatOrcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalS3DescribeOutputFileFormatParquet {
}

export function stageExternalS3DescribeOutputFileFormatParquetToTerraform(struct?: StageExternalS3DescribeOutputFileFormatParquet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalS3DescribeOutputFileFormatParquetToHclTerraform(struct?: StageExternalS3DescribeOutputFileFormatParquet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalS3DescribeOutputFileFormatParquetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StageExternalS3DescribeOutputFileFormatParquet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3DescribeOutputFileFormatParquet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binary_as_text - computed: true, optional: false, required: false
  public get binaryAsText() {
    return this.getBooleanAttribute('binary_as_text');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // null_if - computed: true, optional: false, required: false
  public get nullIf() {
    return this.getListAttribute('null_if');
  }

  // replace_invalid_characters - computed: true, optional: false, required: false
  public get replaceInvalidCharacters() {
    return this.getBooleanAttribute('replace_invalid_characters');
  }

  // trim_space - computed: true, optional: false, required: false
  public get trimSpace() {
    return this.getBooleanAttribute('trim_space');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_logical_type - computed: true, optional: false, required: false
  public get useLogicalType() {
    return this.getBooleanAttribute('use_logical_type');
  }

  // use_vectorized_scanner - computed: true, optional: false, required: false
  public get useVectorizedScanner() {
    return this.getBooleanAttribute('use_vectorized_scanner');
  }
}

export class StageExternalS3DescribeOutputFileFormatParquetList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalS3DescribeOutputFileFormatParquetOutputReference {
    return new StageExternalS3DescribeOutputFileFormatParquetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalS3DescribeOutputFileFormatXml {
}

export function stageExternalS3DescribeOutputFileFormatXmlToTerraform(struct?: StageExternalS3DescribeOutputFileFormatXml): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalS3DescribeOutputFileFormatXmlToHclTerraform(struct?: StageExternalS3DescribeOutputFileFormatXml): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalS3DescribeOutputFileFormatXmlOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StageExternalS3DescribeOutputFileFormatXml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3DescribeOutputFileFormatXml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // disable_auto_convert - computed: true, optional: false, required: false
  public get disableAutoConvert() {
    return this.getBooleanAttribute('disable_auto_convert');
  }

  // ignore_utf8_errors - computed: true, optional: false, required: false
  public get ignoreUtf8Errors() {
    return this.getBooleanAttribute('ignore_utf8_errors');
  }

  // preserve_space - computed: true, optional: false, required: false
  public get preserveSpace() {
    return this.getBooleanAttribute('preserve_space');
  }

  // replace_invalid_characters - computed: true, optional: false, required: false
  public get replaceInvalidCharacters() {
    return this.getBooleanAttribute('replace_invalid_characters');
  }

  // skip_byte_order_mark - computed: true, optional: false, required: false
  public get skipByteOrderMark() {
    return this.getBooleanAttribute('skip_byte_order_mark');
  }

  // strip_outer_element - computed: true, optional: false, required: false
  public get stripOuterElement() {
    return this.getBooleanAttribute('strip_outer_element');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class StageExternalS3DescribeOutputFileFormatXmlList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalS3DescribeOutputFileFormatXmlOutputReference {
    return new StageExternalS3DescribeOutputFileFormatXmlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalS3DescribeOutputFileFormat {
}

export function stageExternalS3DescribeOutputFileFormatToTerraform(struct?: StageExternalS3DescribeOutputFileFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalS3DescribeOutputFileFormatToHclTerraform(struct?: StageExternalS3DescribeOutputFileFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalS3DescribeOutputFileFormatOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StageExternalS3DescribeOutputFileFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3DescribeOutputFileFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avro - computed: true, optional: false, required: false
  private _avro = new StageExternalS3DescribeOutputFileFormatAvroList(this, "avro", false);
  public get avro() {
    return this._avro;
  }

  // csv - computed: true, optional: false, required: false
  private _csv = new StageExternalS3DescribeOutputFileFormatCsvList(this, "csv", false);
  public get csv() {
    return this._csv;
  }

  // format_name - computed: true, optional: false, required: false
  public get formatName() {
    return this.getStringAttribute('format_name');
  }

  // json - computed: true, optional: false, required: false
  private _json = new StageExternalS3DescribeOutputFileFormatJsonList(this, "json", false);
  public get json() {
    return this._json;
  }

  // orc - computed: true, optional: false, required: false
  private _orc = new StageExternalS3DescribeOutputFileFormatOrcList(this, "orc", false);
  public get orc() {
    return this._orc;
  }

  // parquet - computed: true, optional: false, required: false
  private _parquet = new StageExternalS3DescribeOutputFileFormatParquetList(this, "parquet", false);
  public get parquet() {
    return this._parquet;
  }

  // xml - computed: true, optional: false, required: false
  private _xml = new StageExternalS3DescribeOutputFileFormatXmlList(this, "xml", false);
  public get xml() {
    return this._xml;
  }
}

export class StageExternalS3DescribeOutputFileFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalS3DescribeOutputFileFormatOutputReference {
    return new StageExternalS3DescribeOutputFileFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalS3DescribeOutputLocation {
}

export function stageExternalS3DescribeOutputLocationToTerraform(struct?: StageExternalS3DescribeOutputLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalS3DescribeOutputLocationToHclTerraform(struct?: StageExternalS3DescribeOutputLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalS3DescribeOutputLocationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StageExternalS3DescribeOutputLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3DescribeOutputLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_access_point_arn - computed: true, optional: false, required: false
  public get awsAccessPointArn() {
    return this.getStringAttribute('aws_access_point_arn');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getListAttribute('url');
  }
}

export class StageExternalS3DescribeOutputLocationList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalS3DescribeOutputLocationOutputReference {
    return new StageExternalS3DescribeOutputLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalS3DescribeOutputPrivatelink {
}

export function stageExternalS3DescribeOutputPrivatelinkToTerraform(struct?: StageExternalS3DescribeOutputPrivatelink): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalS3DescribeOutputPrivatelinkToHclTerraform(struct?: StageExternalS3DescribeOutputPrivatelink): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalS3DescribeOutputPrivatelinkOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StageExternalS3DescribeOutputPrivatelink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3DescribeOutputPrivatelink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // use_privatelink_endpoint - computed: true, optional: false, required: false
  public get usePrivatelinkEndpoint() {
    return this.getBooleanAttribute('use_privatelink_endpoint');
  }
}

export class StageExternalS3DescribeOutputPrivatelinkList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalS3DescribeOutputPrivatelinkOutputReference {
    return new StageExternalS3DescribeOutputPrivatelinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalS3DescribeOutput {
}

export function stageExternalS3DescribeOutputToTerraform(struct?: StageExternalS3DescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalS3DescribeOutputToHclTerraform(struct?: StageExternalS3DescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalS3DescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StageExternalS3DescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3DescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // directory_table - computed: true, optional: false, required: false
  private _directoryTable = new StageExternalS3DescribeOutputDirectoryTableList(this, "directory_table", false);
  public get directoryTable() {
    return this._directoryTable;
  }

  // file_format - computed: true, optional: false, required: false
  private _fileFormat = new StageExternalS3DescribeOutputFileFormatList(this, "file_format", false);
  public get fileFormat() {
    return this._fileFormat;
  }

  // location - computed: true, optional: false, required: false
  private _location = new StageExternalS3DescribeOutputLocationList(this, "location", false);
  public get location() {
    return this._location;
  }

  // privatelink - computed: true, optional: false, required: false
  private _privatelink = new StageExternalS3DescribeOutputPrivatelinkList(this, "privatelink", false);
  public get privatelink() {
    return this._privatelink;
  }
}

export class StageExternalS3DescribeOutputList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalS3DescribeOutputOutputReference {
    return new StageExternalS3DescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalS3ShowOutput {
}

export function stageExternalS3ShowOutputToTerraform(struct?: StageExternalS3ShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalS3ShowOutputToHclTerraform(struct?: StageExternalS3ShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalS3ShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StageExternalS3ShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3ShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
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

  // directory_enabled - computed: true, optional: false, required: false
  public get directoryEnabled() {
    return this.getBooleanAttribute('directory_enabled');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // has_credentials - computed: true, optional: false, required: false
  public get hasCredentials() {
    return this.getBooleanAttribute('has_credentials');
  }

  // has_encryption_key - computed: true, optional: false, required: false
  public get hasEncryptionKey() {
    return this.getBooleanAttribute('has_encryption_key');
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // storage_integration - computed: true, optional: false, required: false
  public get storageIntegration() {
    return this.getStringAttribute('storage_integration');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class StageExternalS3ShowOutputList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalS3ShowOutputOutputReference {
    return new StageExternalS3ShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalS3Credentials {
  /**
  * Specifies the AWS access key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#aws_key_id StageExternalS3#aws_key_id}
  */
  readonly awsKeyId?: string;
  /**
  * Specifies the AWS IAM role ARN to use for accessing the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#aws_role StageExternalS3#aws_role}
  */
  readonly awsRole?: string;
  /**
  * Specifies the AWS secret access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#aws_secret_key StageExternalS3#aws_secret_key}
  */
  readonly awsSecretKey?: string;
  /**
  * Specifies the AWS session token for temporary credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#aws_token StageExternalS3#aws_token}
  */
  readonly awsToken?: string;
}

export function stageExternalS3CredentialsToTerraform(struct?: StageExternalS3CredentialsOutputReference | StageExternalS3Credentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_key_id: cdktn.stringToTerraform(struct!.awsKeyId),
    aws_role: cdktn.stringToTerraform(struct!.awsRole),
    aws_secret_key: cdktn.stringToTerraform(struct!.awsSecretKey),
    aws_token: cdktn.stringToTerraform(struct!.awsToken),
  }
}


export function stageExternalS3CredentialsToHclTerraform(struct?: StageExternalS3CredentialsOutputReference | StageExternalS3Credentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_key_id: {
      value: cdktn.stringToHclTerraform(struct!.awsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_role: {
      value: cdktn.stringToHclTerraform(struct!.awsRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_key: {
      value: cdktn.stringToHclTerraform(struct!.awsSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_token: {
      value: cdktn.stringToHclTerraform(struct!.awsToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalS3CredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalS3Credentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsKeyId = this._awsKeyId;
    }
    if (this._awsRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRole = this._awsRole;
    }
    if (this._awsSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretKey = this._awsSecretKey;
    }
    if (this._awsToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsToken = this._awsToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3Credentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsKeyId = undefined;
      this._awsRole = undefined;
      this._awsSecretKey = undefined;
      this._awsToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsKeyId = value.awsKeyId;
      this._awsRole = value.awsRole;
      this._awsSecretKey = value.awsSecretKey;
      this._awsToken = value.awsToken;
    }
  }

  // aws_key_id - computed: false, optional: true, required: false
  private _awsKeyId?: string; 
  public get awsKeyId() {
    return this.getStringAttribute('aws_key_id');
  }
  public set awsKeyId(value: string) {
    this._awsKeyId = value;
  }
  public resetAwsKeyId() {
    this._awsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKeyIdInput() {
    return this._awsKeyId;
  }

  // aws_role - computed: false, optional: true, required: false
  private _awsRole?: string; 
  public get awsRole() {
    return this.getStringAttribute('aws_role');
  }
  public set awsRole(value: string) {
    this._awsRole = value;
  }
  public resetAwsRole() {
    this._awsRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleInput() {
    return this._awsRole;
  }

  // aws_secret_key - computed: false, optional: true, required: false
  private _awsSecretKey?: string; 
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
  public set awsSecretKey(value: string) {
    this._awsSecretKey = value;
  }
  public resetAwsSecretKey() {
    this._awsSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretKeyInput() {
    return this._awsSecretKey;
  }

  // aws_token - computed: false, optional: true, required: false
  private _awsToken?: string; 
  public get awsToken() {
    return this.getStringAttribute('aws_token');
  }
  public set awsToken(value: string) {
    this._awsToken = value;
  }
  public resetAwsToken() {
    this._awsToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTokenInput() {
    return this._awsToken;
  }
}
export interface StageExternalS3Directory {
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should enable triggering automatic refreshes of the directory table metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#auto_refresh StageExternalS3#auto_refresh}
  */
  readonly autoRefresh?: string;
  /**
  * Specifies whether to enable a directory table on the external stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#enable StageExternalS3#enable}
  */
  readonly enable: boolean | cdktn.IResolvable;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically refresh the directory table metadata once, immediately after the stage is created.This field is used only when creating the object. Changes on this field are ignored after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#refresh_on_create StageExternalS3#refresh_on_create}
  */
  readonly refreshOnCreate?: string;
}

export function stageExternalS3DirectoryToTerraform(struct?: StageExternalS3DirectoryOutputReference | StageExternalS3Directory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_refresh: cdktn.stringToTerraform(struct!.autoRefresh),
    enable: cdktn.booleanToTerraform(struct!.enable),
    refresh_on_create: cdktn.stringToTerraform(struct!.refreshOnCreate),
  }
}


export function stageExternalS3DirectoryToHclTerraform(struct?: StageExternalS3DirectoryOutputReference | StageExternalS3Directory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_refresh: {
      value: cdktn.stringToHclTerraform(struct!.autoRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktn.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_on_create: {
      value: cdktn.stringToHclTerraform(struct!.refreshOnCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalS3DirectoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalS3Directory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRefresh = this._autoRefresh;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._refreshOnCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshOnCreate = this._refreshOnCreate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3Directory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRefresh = undefined;
      this._enable = undefined;
      this._refreshOnCreate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRefresh = value.autoRefresh;
      this._enable = value.enable;
      this._refreshOnCreate = value.refreshOnCreate;
    }
  }

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

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktn.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktn.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // refresh_on_create - computed: false, optional: true, required: false
  private _refreshOnCreate?: string; 
  public get refreshOnCreate() {
    return this.getStringAttribute('refresh_on_create');
  }
  public set refreshOnCreate(value: string) {
    this._refreshOnCreate = value;
  }
  public resetRefreshOnCreate() {
    this._refreshOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshOnCreateInput() {
    return this._refreshOnCreate;
  }
}
export interface StageExternalS3EncryptionAwsCse {
  /**
  * Specifies the 128-bit or 256-bit client-side master key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#master_key StageExternalS3#master_key}
  */
  readonly masterKey: string;
}

export function stageExternalS3EncryptionAwsCseToTerraform(struct?: StageExternalS3EncryptionAwsCseOutputReference | StageExternalS3EncryptionAwsCse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master_key: cdktn.stringToTerraform(struct!.masterKey),
  }
}


export function stageExternalS3EncryptionAwsCseToHclTerraform(struct?: StageExternalS3EncryptionAwsCseOutputReference | StageExternalS3EncryptionAwsCse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    master_key: {
      value: cdktn.stringToHclTerraform(struct!.masterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalS3EncryptionAwsCseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalS3EncryptionAwsCse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterKey = this._masterKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3EncryptionAwsCse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._masterKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._masterKey = value.masterKey;
    }
  }

  // master_key - computed: false, optional: false, required: true
  private _masterKey?: string; 
  public get masterKey() {
    return this.getStringAttribute('master_key');
  }
  public set masterKey(value: string) {
    this._masterKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterKeyInput() {
    return this._masterKey;
  }
}
export interface StageExternalS3EncryptionAwsSseKms {
  /**
  * Specifies the KMS-managed key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#kms_key_id StageExternalS3#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function stageExternalS3EncryptionAwsSseKmsToTerraform(struct?: StageExternalS3EncryptionAwsSseKmsOutputReference | StageExternalS3EncryptionAwsSseKms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
  }
}


export function stageExternalS3EncryptionAwsSseKmsToHclTerraform(struct?: StageExternalS3EncryptionAwsSseKmsOutputReference | StageExternalS3EncryptionAwsSseKms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalS3EncryptionAwsSseKmsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalS3EncryptionAwsSseKms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3EncryptionAwsSseKms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }
}
export interface StageExternalS3EncryptionAwsSseS3 {
}

export function stageExternalS3EncryptionAwsSseS3ToTerraform(struct?: StageExternalS3EncryptionAwsSseS3OutputReference | StageExternalS3EncryptionAwsSseS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalS3EncryptionAwsSseS3ToHclTerraform(struct?: StageExternalS3EncryptionAwsSseS3OutputReference | StageExternalS3EncryptionAwsSseS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalS3EncryptionAwsSseS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalS3EncryptionAwsSseS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3EncryptionAwsSseS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface StageExternalS3EncryptionNone {
}

export function stageExternalS3EncryptionNoneToTerraform(struct?: StageExternalS3EncryptionNoneOutputReference | StageExternalS3EncryptionNone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalS3EncryptionNoneToHclTerraform(struct?: StageExternalS3EncryptionNoneOutputReference | StageExternalS3EncryptionNone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalS3EncryptionNoneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalS3EncryptionNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3EncryptionNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface StageExternalS3Encryption {
  /**
  * aws_cse block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#aws_cse StageExternalS3#aws_cse}
  */
  readonly awsCse?: StageExternalS3EncryptionAwsCse;
  /**
  * aws_sse_kms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#aws_sse_kms StageExternalS3#aws_sse_kms}
  */
  readonly awsSseKms?: StageExternalS3EncryptionAwsSseKms;
  /**
  * aws_sse_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#aws_sse_s3 StageExternalS3#aws_sse_s3}
  */
  readonly awsSseS3?: StageExternalS3EncryptionAwsSseS3;
  /**
  * none block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#none StageExternalS3#none}
  */
  readonly none?: StageExternalS3EncryptionNone;
}

export function stageExternalS3EncryptionToTerraform(struct?: StageExternalS3EncryptionOutputReference | StageExternalS3Encryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_cse: stageExternalS3EncryptionAwsCseToTerraform(struct!.awsCse),
    aws_sse_kms: stageExternalS3EncryptionAwsSseKmsToTerraform(struct!.awsSseKms),
    aws_sse_s3: stageExternalS3EncryptionAwsSseS3ToTerraform(struct!.awsSseS3),
    none: stageExternalS3EncryptionNoneToTerraform(struct!.none),
  }
}


export function stageExternalS3EncryptionToHclTerraform(struct?: StageExternalS3EncryptionOutputReference | StageExternalS3Encryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_cse: {
      value: stageExternalS3EncryptionAwsCseToHclTerraform(struct!.awsCse),
      isBlock: true,
      type: "list",
      storageClassType: "StageExternalS3EncryptionAwsCseList",
    },
    aws_sse_kms: {
      value: stageExternalS3EncryptionAwsSseKmsToHclTerraform(struct!.awsSseKms),
      isBlock: true,
      type: "list",
      storageClassType: "StageExternalS3EncryptionAwsSseKmsList",
    },
    aws_sse_s3: {
      value: stageExternalS3EncryptionAwsSseS3ToHclTerraform(struct!.awsSseS3),
      isBlock: true,
      type: "list",
      storageClassType: "StageExternalS3EncryptionAwsSseS3List",
    },
    none: {
      value: stageExternalS3EncryptionNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "list",
      storageClassType: "StageExternalS3EncryptionNoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalS3EncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalS3Encryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsCse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCse = this._awsCse?.internalValue;
    }
    if (this._awsSseKms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSseKms = this._awsSseKms?.internalValue;
    }
    if (this._awsSseS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSseS3 = this._awsSseS3?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3Encryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsCse.internalValue = undefined;
      this._awsSseKms.internalValue = undefined;
      this._awsSseS3.internalValue = undefined;
      this._none.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsCse.internalValue = value.awsCse;
      this._awsSseKms.internalValue = value.awsSseKms;
      this._awsSseS3.internalValue = value.awsSseS3;
      this._none.internalValue = value.none;
    }
  }

  // aws_cse - computed: false, optional: true, required: false
  private _awsCse = new StageExternalS3EncryptionAwsCseOutputReference(this, "aws_cse");
  public get awsCse() {
    return this._awsCse;
  }
  public putAwsCse(value: StageExternalS3EncryptionAwsCse) {
    this._awsCse.internalValue = value;
  }
  public resetAwsCse() {
    this._awsCse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCseInput() {
    return this._awsCse.internalValue;
  }

  // aws_sse_kms - computed: false, optional: true, required: false
  private _awsSseKms = new StageExternalS3EncryptionAwsSseKmsOutputReference(this, "aws_sse_kms");
  public get awsSseKms() {
    return this._awsSseKms;
  }
  public putAwsSseKms(value: StageExternalS3EncryptionAwsSseKms) {
    this._awsSseKms.internalValue = value;
  }
  public resetAwsSseKms() {
    this._awsSseKms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSseKmsInput() {
    return this._awsSseKms.internalValue;
  }

  // aws_sse_s3 - computed: false, optional: true, required: false
  private _awsSseS3 = new StageExternalS3EncryptionAwsSseS3OutputReference(this, "aws_sse_s3");
  public get awsSseS3() {
    return this._awsSseS3;
  }
  public putAwsSseS3(value: StageExternalS3EncryptionAwsSseS3) {
    this._awsSseS3.internalValue = value;
  }
  public resetAwsSseS3() {
    this._awsSseS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSseS3Input() {
    return this._awsSseS3.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new StageExternalS3EncryptionNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: StageExternalS3EncryptionNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }
}
export interface StageExternalS3FileFormatAvro {
  /**
  * Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#compression StageExternalS3#compression}
  */
  readonly compression?: string;
  /**
  * String used to convert to and from SQL NULL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#null_if StageExternalS3#null_if}
  */
  readonly nullIf?: string[];
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#replace_invalid_characters StageExternalS3#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#trim_space StageExternalS3#trim_space}
  */
  readonly trimSpace?: string;
}

export function stageExternalS3FileFormatAvroToTerraform(struct?: StageExternalS3FileFormatAvroOutputReference | StageExternalS3FileFormatAvro): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktn.stringToTerraform(struct!.compression),
    null_if: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nullIf),
    replace_invalid_characters: cdktn.stringToTerraform(struct!.replaceInvalidCharacters),
    trim_space: cdktn.stringToTerraform(struct!.trimSpace),
  }
}


export function stageExternalS3FileFormatAvroToHclTerraform(struct?: StageExternalS3FileFormatAvroOutputReference | StageExternalS3FileFormatAvro): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_if: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nullIf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    replace_invalid_characters: {
      value: cdktn.stringToHclTerraform(struct!.replaceInvalidCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trim_space: {
      value: cdktn.stringToHclTerraform(struct!.trimSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalS3FileFormatAvroOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalS3FileFormatAvro | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._nullIf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullIf = this._nullIf;
    }
    if (this._replaceInvalidCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceInvalidCharacters = this._replaceInvalidCharacters;
    }
    if (this._trimSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.trimSpace = this._trimSpace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3FileFormatAvro | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compression = undefined;
      this._nullIf = undefined;
      this._replaceInvalidCharacters = undefined;
      this._trimSpace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compression = value.compression;
      this._nullIf = value.nullIf;
      this._replaceInvalidCharacters = value.replaceInvalidCharacters;
      this._trimSpace = value.trimSpace;
    }
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // null_if - computed: false, optional: true, required: false
  private _nullIf?: string[]; 
  public get nullIf() {
    return this.getListAttribute('null_if');
  }
  public set nullIf(value: string[]) {
    this._nullIf = value;
  }
  public resetNullIf() {
    this._nullIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullIfInput() {
    return this._nullIf;
  }

  // replace_invalid_characters - computed: false, optional: true, required: false
  private _replaceInvalidCharacters?: string; 
  public get replaceInvalidCharacters() {
    return this.getStringAttribute('replace_invalid_characters');
  }
  public set replaceInvalidCharacters(value: string) {
    this._replaceInvalidCharacters = value;
  }
  public resetReplaceInvalidCharacters() {
    this._replaceInvalidCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidCharactersInput() {
    return this._replaceInvalidCharacters;
  }

  // trim_space - computed: false, optional: true, required: false
  private _trimSpace?: string; 
  public get trimSpace() {
    return this.getStringAttribute('trim_space');
  }
  public set trimSpace(value: string) {
    this._trimSpace = value;
  }
  public resetTrimSpace() {
    this._trimSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimSpaceInput() {
    return this._trimSpace;
  }
}
export interface StageExternalS3FileFormatCsv {
  /**
  * Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#binary_format StageExternalS3#binary_format}
  */
  readonly binaryFormat?: string;
  /**
  * Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#compression StageExternalS3#compression}
  */
  readonly compression?: string;
  /**
  * Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#date_format StageExternalS3#date_format}
  */
  readonly dateFormat?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#empty_field_as_null StageExternalS3#empty_field_as_null}
  */
  readonly emptyFieldAsNull?: string;
  /**
  * Specifies the character set of the source data when loading data into a table. Valid values: `BIG5` | `EUCJP` | `EUCKR` | `GB18030` | `IBM420` | `IBM424` | `ISO2022CN` | `ISO2022JP` | `ISO2022KR` | `ISO88591` | `ISO88592` | `ISO88595` | `ISO88596` | `ISO88597` | `ISO88598` | `ISO88599` | `ISO885915` | `KOI8R` | `SHIFTJIS` | `UTF8` | `UTF16` | `UTF16BE` | `UTF16LE` | `UTF32` | `UTF32BE` | `UTF32LE` | `WINDOWS1250` | `WINDOWS1251` | `WINDOWS1252` | `WINDOWS1253` | `WINDOWS1254` | `WINDOWS1255` | `WINDOWS1256`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#encoding StageExternalS3#encoding}
  */
  readonly encoding?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#error_on_column_count_mismatch StageExternalS3#error_on_column_count_mismatch}
  */
  readonly errorOnColumnCountMismatch?: string;
  /**
  * Single character string used as the escape character for field values. Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#escape StageExternalS3#escape}
  */
  readonly escape?: string;
  /**
  * Single character string used as the escape character for unenclosed field values only. Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#escape_unenclosed_field StageExternalS3#escape_unenclosed_field}
  */
  readonly escapeUnenclosedField?: string;
  /**
  * One or more singlebyte or multibyte characters that separate fields in an input file. Use `NONE` to specify no delimiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#field_delimiter StageExternalS3#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Character used to enclose strings. Use `NONE` to specify no enclosure character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#field_optionally_enclosed_by StageExternalS3#field_optionally_enclosed_by}
  */
  readonly fieldOptionallyEnclosedBy?: string;
  /**
  * Specifies the extension for files unloaded to a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#file_extension StageExternalS3#file_extension}
  */
  readonly fileExtension?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#multi_line StageExternalS3#multi_line}
  */
  readonly multiLine?: string;
  /**
  * String used to convert to and from SQL NULL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#null_if StageExternalS3#null_if}
  */
  readonly nullIf?: string[];
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#parse_header StageExternalS3#parse_header}
  */
  readonly parseHeader?: string;
  /**
  * One or more singlebyte or multibyte characters that separate records in an input file. Use `NONE` to specify no delimiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#record_delimiter StageExternalS3#record_delimiter}
  */
  readonly recordDelimiter?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#replace_invalid_characters StageExternalS3#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#skip_blank_lines StageExternalS3#skip_blank_lines}
  */
  readonly skipBlankLines?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#skip_byte_order_mark StageExternalS3#skip_byte_order_mark}
  */
  readonly skipByteOrderMark?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#skip_header StageExternalS3#skip_header}
  */
  readonly skipHeader?: number;
  /**
  * Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#time_format StageExternalS3#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#timestamp_format StageExternalS3#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#trim_space StageExternalS3#trim_space}
  */
  readonly trimSpace?: string;
}

export function stageExternalS3FileFormatCsvToTerraform(struct?: StageExternalS3FileFormatCsvOutputReference | StageExternalS3FileFormatCsv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_format: cdktn.stringToTerraform(struct!.binaryFormat),
    compression: cdktn.stringToTerraform(struct!.compression),
    date_format: cdktn.stringToTerraform(struct!.dateFormat),
    empty_field_as_null: cdktn.stringToTerraform(struct!.emptyFieldAsNull),
    encoding: cdktn.stringToTerraform(struct!.encoding),
    error_on_column_count_mismatch: cdktn.stringToTerraform(struct!.errorOnColumnCountMismatch),
    escape: cdktn.stringToTerraform(struct!.escape),
    escape_unenclosed_field: cdktn.stringToTerraform(struct!.escapeUnenclosedField),
    field_delimiter: cdktn.stringToTerraform(struct!.fieldDelimiter),
    field_optionally_enclosed_by: cdktn.stringToTerraform(struct!.fieldOptionallyEnclosedBy),
    file_extension: cdktn.stringToTerraform(struct!.fileExtension),
    multi_line: cdktn.stringToTerraform(struct!.multiLine),
    null_if: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nullIf),
    parse_header: cdktn.stringToTerraform(struct!.parseHeader),
    record_delimiter: cdktn.stringToTerraform(struct!.recordDelimiter),
    replace_invalid_characters: cdktn.stringToTerraform(struct!.replaceInvalidCharacters),
    skip_blank_lines: cdktn.stringToTerraform(struct!.skipBlankLines),
    skip_byte_order_mark: cdktn.stringToTerraform(struct!.skipByteOrderMark),
    skip_header: cdktn.numberToTerraform(struct!.skipHeader),
    time_format: cdktn.stringToTerraform(struct!.timeFormat),
    timestamp_format: cdktn.stringToTerraform(struct!.timestampFormat),
    trim_space: cdktn.stringToTerraform(struct!.trimSpace),
  }
}


export function stageExternalS3FileFormatCsvToHclTerraform(struct?: StageExternalS3FileFormatCsvOutputReference | StageExternalS3FileFormatCsv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary_format: {
      value: cdktn.stringToHclTerraform(struct!.binaryFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    empty_field_as_null: {
      value: cdktn.stringToHclTerraform(struct!.emptyFieldAsNull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoding: {
      value: cdktn.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_on_column_count_mismatch: {
      value: cdktn.stringToHclTerraform(struct!.errorOnColumnCountMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escape: {
      value: cdktn.stringToHclTerraform(struct!.escape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escape_unenclosed_field: {
      value: cdktn.stringToHclTerraform(struct!.escapeUnenclosedField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.fieldDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_optionally_enclosed_by: {
      value: cdktn.stringToHclTerraform(struct!.fieldOptionallyEnclosedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_extension: {
      value: cdktn.stringToHclTerraform(struct!.fileExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_line: {
      value: cdktn.stringToHclTerraform(struct!.multiLine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_if: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nullIf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    parse_header: {
      value: cdktn.stringToHclTerraform(struct!.parseHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.recordDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_invalid_characters: {
      value: cdktn.stringToHclTerraform(struct!.replaceInvalidCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_blank_lines: {
      value: cdktn.stringToHclTerraform(struct!.skipBlankLines),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_byte_order_mark: {
      value: cdktn.stringToHclTerraform(struct!.skipByteOrderMark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_header: {
      value: cdktn.numberToHclTerraform(struct!.skipHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_format: {
      value: cdktn.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_format: {
      value: cdktn.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trim_space: {
      value: cdktn.stringToHclTerraform(struct!.trimSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalS3FileFormatCsvOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalS3FileFormatCsv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryFormat = this._binaryFormat;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._dateFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFormat = this._dateFormat;
    }
    if (this._emptyFieldAsNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyFieldAsNull = this._emptyFieldAsNull;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._errorOnColumnCountMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOnColumnCountMismatch = this._errorOnColumnCountMismatch;
    }
    if (this._escape !== undefined) {
      hasAnyValues = true;
      internalValueResult.escape = this._escape;
    }
    if (this._escapeUnenclosedField !== undefined) {
      hasAnyValues = true;
      internalValueResult.escapeUnenclosedField = this._escapeUnenclosedField;
    }
    if (this._fieldDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._fieldOptionallyEnclosedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldOptionallyEnclosedBy = this._fieldOptionallyEnclosedBy;
    }
    if (this._fileExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtension = this._fileExtension;
    }
    if (this._multiLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiLine = this._multiLine;
    }
    if (this._nullIf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullIf = this._nullIf;
    }
    if (this._parseHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseHeader = this._parseHeader;
    }
    if (this._recordDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordDelimiter = this._recordDelimiter;
    }
    if (this._replaceInvalidCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceInvalidCharacters = this._replaceInvalidCharacters;
    }
    if (this._skipBlankLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipBlankLines = this._skipBlankLines;
    }
    if (this._skipByteOrderMark !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipByteOrderMark = this._skipByteOrderMark;
    }
    if (this._skipHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipHeader = this._skipHeader;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    if (this._trimSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.trimSpace = this._trimSpace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3FileFormatCsv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._binaryFormat = undefined;
      this._compression = undefined;
      this._dateFormat = undefined;
      this._emptyFieldAsNull = undefined;
      this._encoding = undefined;
      this._errorOnColumnCountMismatch = undefined;
      this._escape = undefined;
      this._escapeUnenclosedField = undefined;
      this._fieldDelimiter = undefined;
      this._fieldOptionallyEnclosedBy = undefined;
      this._fileExtension = undefined;
      this._multiLine = undefined;
      this._nullIf = undefined;
      this._parseHeader = undefined;
      this._recordDelimiter = undefined;
      this._replaceInvalidCharacters = undefined;
      this._skipBlankLines = undefined;
      this._skipByteOrderMark = undefined;
      this._skipHeader = undefined;
      this._timeFormat = undefined;
      this._timestampFormat = undefined;
      this._trimSpace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._binaryFormat = value.binaryFormat;
      this._compression = value.compression;
      this._dateFormat = value.dateFormat;
      this._emptyFieldAsNull = value.emptyFieldAsNull;
      this._encoding = value.encoding;
      this._errorOnColumnCountMismatch = value.errorOnColumnCountMismatch;
      this._escape = value.escape;
      this._escapeUnenclosedField = value.escapeUnenclosedField;
      this._fieldDelimiter = value.fieldDelimiter;
      this._fieldOptionallyEnclosedBy = value.fieldOptionallyEnclosedBy;
      this._fileExtension = value.fileExtension;
      this._multiLine = value.multiLine;
      this._nullIf = value.nullIf;
      this._parseHeader = value.parseHeader;
      this._recordDelimiter = value.recordDelimiter;
      this._replaceInvalidCharacters = value.replaceInvalidCharacters;
      this._skipBlankLines = value.skipBlankLines;
      this._skipByteOrderMark = value.skipByteOrderMark;
      this._skipHeader = value.skipHeader;
      this._timeFormat = value.timeFormat;
      this._timestampFormat = value.timestampFormat;
      this._trimSpace = value.trimSpace;
    }
  }

  // binary_format - computed: false, optional: true, required: false
  private _binaryFormat?: string; 
  public get binaryFormat() {
    return this.getStringAttribute('binary_format');
  }
  public set binaryFormat(value: string) {
    this._binaryFormat = value;
  }
  public resetBinaryFormat() {
    this._binaryFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryFormatInput() {
    return this._binaryFormat;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // date_format - computed: false, optional: true, required: false
  private _dateFormat?: string; 
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }
  public set dateFormat(value: string) {
    this._dateFormat = value;
  }
  public resetDateFormat() {
    this._dateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFormatInput() {
    return this._dateFormat;
  }

  // empty_field_as_null - computed: false, optional: true, required: false
  private _emptyFieldAsNull?: string; 
  public get emptyFieldAsNull() {
    return this.getStringAttribute('empty_field_as_null');
  }
  public set emptyFieldAsNull(value: string) {
    this._emptyFieldAsNull = value;
  }
  public resetEmptyFieldAsNull() {
    this._emptyFieldAsNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyFieldAsNullInput() {
    return this._emptyFieldAsNull;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // error_on_column_count_mismatch - computed: false, optional: true, required: false
  private _errorOnColumnCountMismatch?: string; 
  public get errorOnColumnCountMismatch() {
    return this.getStringAttribute('error_on_column_count_mismatch');
  }
  public set errorOnColumnCountMismatch(value: string) {
    this._errorOnColumnCountMismatch = value;
  }
  public resetErrorOnColumnCountMismatch() {
    this._errorOnColumnCountMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOnColumnCountMismatchInput() {
    return this._errorOnColumnCountMismatch;
  }

  // escape - computed: false, optional: true, required: false
  private _escape?: string; 
  public get escape() {
    return this.getStringAttribute('escape');
  }
  public set escape(value: string) {
    this._escape = value;
  }
  public resetEscape() {
    this._escape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeInput() {
    return this._escape;
  }

  // escape_unenclosed_field - computed: false, optional: true, required: false
  private _escapeUnenclosedField?: string; 
  public get escapeUnenclosedField() {
    return this.getStringAttribute('escape_unenclosed_field');
  }
  public set escapeUnenclosedField(value: string) {
    this._escapeUnenclosedField = value;
  }
  public resetEscapeUnenclosedField() {
    this._escapeUnenclosedField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeUnenclosedFieldInput() {
    return this._escapeUnenclosedField;
  }

  // field_delimiter - computed: false, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
  }

  // field_optionally_enclosed_by - computed: false, optional: true, required: false
  private _fieldOptionallyEnclosedBy?: string; 
  public get fieldOptionallyEnclosedBy() {
    return this.getStringAttribute('field_optionally_enclosed_by');
  }
  public set fieldOptionallyEnclosedBy(value: string) {
    this._fieldOptionallyEnclosedBy = value;
  }
  public resetFieldOptionallyEnclosedBy() {
    this._fieldOptionallyEnclosedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldOptionallyEnclosedByInput() {
    return this._fieldOptionallyEnclosedBy;
  }

  // file_extension - computed: false, optional: true, required: false
  private _fileExtension?: string; 
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }
  public set fileExtension(value: string) {
    this._fileExtension = value;
  }
  public resetFileExtension() {
    this._fileExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionInput() {
    return this._fileExtension;
  }

  // multi_line - computed: false, optional: true, required: false
  private _multiLine?: string; 
  public get multiLine() {
    return this.getStringAttribute('multi_line');
  }
  public set multiLine(value: string) {
    this._multiLine = value;
  }
  public resetMultiLine() {
    this._multiLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiLineInput() {
    return this._multiLine;
  }

  // null_if - computed: false, optional: true, required: false
  private _nullIf?: string[]; 
  public get nullIf() {
    return this.getListAttribute('null_if');
  }
  public set nullIf(value: string[]) {
    this._nullIf = value;
  }
  public resetNullIf() {
    this._nullIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullIfInput() {
    return this._nullIf;
  }

  // parse_header - computed: false, optional: true, required: false
  private _parseHeader?: string; 
  public get parseHeader() {
    return this.getStringAttribute('parse_header');
  }
  public set parseHeader(value: string) {
    this._parseHeader = value;
  }
  public resetParseHeader() {
    this._parseHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseHeaderInput() {
    return this._parseHeader;
  }

  // record_delimiter - computed: false, optional: true, required: false
  private _recordDelimiter?: string; 
  public get recordDelimiter() {
    return this.getStringAttribute('record_delimiter');
  }
  public set recordDelimiter(value: string) {
    this._recordDelimiter = value;
  }
  public resetRecordDelimiter() {
    this._recordDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordDelimiterInput() {
    return this._recordDelimiter;
  }

  // replace_invalid_characters - computed: false, optional: true, required: false
  private _replaceInvalidCharacters?: string; 
  public get replaceInvalidCharacters() {
    return this.getStringAttribute('replace_invalid_characters');
  }
  public set replaceInvalidCharacters(value: string) {
    this._replaceInvalidCharacters = value;
  }
  public resetReplaceInvalidCharacters() {
    this._replaceInvalidCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidCharactersInput() {
    return this._replaceInvalidCharacters;
  }

  // skip_blank_lines - computed: false, optional: true, required: false
  private _skipBlankLines?: string; 
  public get skipBlankLines() {
    return this.getStringAttribute('skip_blank_lines');
  }
  public set skipBlankLines(value: string) {
    this._skipBlankLines = value;
  }
  public resetSkipBlankLines() {
    this._skipBlankLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipBlankLinesInput() {
    return this._skipBlankLines;
  }

  // skip_byte_order_mark - computed: false, optional: true, required: false
  private _skipByteOrderMark?: string; 
  public get skipByteOrderMark() {
    return this.getStringAttribute('skip_byte_order_mark');
  }
  public set skipByteOrderMark(value: string) {
    this._skipByteOrderMark = value;
  }
  public resetSkipByteOrderMark() {
    this._skipByteOrderMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipByteOrderMarkInput() {
    return this._skipByteOrderMark;
  }

  // skip_header - computed: false, optional: true, required: false
  private _skipHeader?: number; 
  public get skipHeader() {
    return this.getNumberAttribute('skip_header');
  }
  public set skipHeader(value: number) {
    this._skipHeader = value;
  }
  public resetSkipHeader() {
    this._skipHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipHeaderInput() {
    return this._skipHeader;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // timestamp_format - computed: false, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
  }

  // trim_space - computed: false, optional: true, required: false
  private _trimSpace?: string; 
  public get trimSpace() {
    return this.getStringAttribute('trim_space');
  }
  public set trimSpace(value: string) {
    this._trimSpace = value;
  }
  public resetTrimSpace() {
    this._trimSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimSpaceInput() {
    return this._trimSpace;
  }
}
export interface StageExternalS3FileFormatJson {
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#allow_duplicate StageExternalS3#allow_duplicate}
  */
  readonly allowDuplicate?: string;
  /**
  * Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#binary_format StageExternalS3#binary_format}
  */
  readonly binaryFormat?: string;
  /**
  * Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#compression StageExternalS3#compression}
  */
  readonly compression?: string;
  /**
  * Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#date_format StageExternalS3#date_format}
  */
  readonly dateFormat?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#enable_octal StageExternalS3#enable_octal}
  */
  readonly enableOctal?: string;
  /**
  * Specifies the extension for files unloaded to a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#file_extension StageExternalS3#file_extension}
  */
  readonly fileExtension?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#ignore_utf8_errors StageExternalS3#ignore_utf8_errors}
  */
  readonly ignoreUtf8Errors?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#multi_line StageExternalS3#multi_line}
  */
  readonly multiLine?: string;
  /**
  * String used to convert to and from SQL NULL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#null_if StageExternalS3#null_if}
  */
  readonly nullIf?: string[];
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#replace_invalid_characters StageExternalS3#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#skip_byte_order_mark StageExternalS3#skip_byte_order_mark}
  */
  readonly skipByteOrderMark?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#strip_null_values StageExternalS3#strip_null_values}
  */
  readonly stripNullValues?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#strip_outer_array StageExternalS3#strip_outer_array}
  */
  readonly stripOuterArray?: string;
  /**
  * Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#time_format StageExternalS3#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#timestamp_format StageExternalS3#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#trim_space StageExternalS3#trim_space}
  */
  readonly trimSpace?: string;
}

export function stageExternalS3FileFormatJsonToTerraform(struct?: StageExternalS3FileFormatJsonOutputReference | StageExternalS3FileFormatJson): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_duplicate: cdktn.stringToTerraform(struct!.allowDuplicate),
    binary_format: cdktn.stringToTerraform(struct!.binaryFormat),
    compression: cdktn.stringToTerraform(struct!.compression),
    date_format: cdktn.stringToTerraform(struct!.dateFormat),
    enable_octal: cdktn.stringToTerraform(struct!.enableOctal),
    file_extension: cdktn.stringToTerraform(struct!.fileExtension),
    ignore_utf8_errors: cdktn.stringToTerraform(struct!.ignoreUtf8Errors),
    multi_line: cdktn.stringToTerraform(struct!.multiLine),
    null_if: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nullIf),
    replace_invalid_characters: cdktn.stringToTerraform(struct!.replaceInvalidCharacters),
    skip_byte_order_mark: cdktn.stringToTerraform(struct!.skipByteOrderMark),
    strip_null_values: cdktn.stringToTerraform(struct!.stripNullValues),
    strip_outer_array: cdktn.stringToTerraform(struct!.stripOuterArray),
    time_format: cdktn.stringToTerraform(struct!.timeFormat),
    timestamp_format: cdktn.stringToTerraform(struct!.timestampFormat),
    trim_space: cdktn.stringToTerraform(struct!.trimSpace),
  }
}


export function stageExternalS3FileFormatJsonToHclTerraform(struct?: StageExternalS3FileFormatJsonOutputReference | StageExternalS3FileFormatJson): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_duplicate: {
      value: cdktn.stringToHclTerraform(struct!.allowDuplicate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binary_format: {
      value: cdktn.stringToHclTerraform(struct!.binaryFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_octal: {
      value: cdktn.stringToHclTerraform(struct!.enableOctal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_extension: {
      value: cdktn.stringToHclTerraform(struct!.fileExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_utf8_errors: {
      value: cdktn.stringToHclTerraform(struct!.ignoreUtf8Errors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_line: {
      value: cdktn.stringToHclTerraform(struct!.multiLine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_if: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nullIf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    replace_invalid_characters: {
      value: cdktn.stringToHclTerraform(struct!.replaceInvalidCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_byte_order_mark: {
      value: cdktn.stringToHclTerraform(struct!.skipByteOrderMark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_null_values: {
      value: cdktn.stringToHclTerraform(struct!.stripNullValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_outer_array: {
      value: cdktn.stringToHclTerraform(struct!.stripOuterArray),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktn.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_format: {
      value: cdktn.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trim_space: {
      value: cdktn.stringToHclTerraform(struct!.trimSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalS3FileFormatJsonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalS3FileFormatJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDuplicate !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDuplicate = this._allowDuplicate;
    }
    if (this._binaryFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryFormat = this._binaryFormat;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._dateFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFormat = this._dateFormat;
    }
    if (this._enableOctal !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOctal = this._enableOctal;
    }
    if (this._fileExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtension = this._fileExtension;
    }
    if (this._ignoreUtf8Errors !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUtf8Errors = this._ignoreUtf8Errors;
    }
    if (this._multiLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiLine = this._multiLine;
    }
    if (this._nullIf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullIf = this._nullIf;
    }
    if (this._replaceInvalidCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceInvalidCharacters = this._replaceInvalidCharacters;
    }
    if (this._skipByteOrderMark !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipByteOrderMark = this._skipByteOrderMark;
    }
    if (this._stripNullValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripNullValues = this._stripNullValues;
    }
    if (this._stripOuterArray !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripOuterArray = this._stripOuterArray;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    if (this._trimSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.trimSpace = this._trimSpace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3FileFormatJson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowDuplicate = undefined;
      this._binaryFormat = undefined;
      this._compression = undefined;
      this._dateFormat = undefined;
      this._enableOctal = undefined;
      this._fileExtension = undefined;
      this._ignoreUtf8Errors = undefined;
      this._multiLine = undefined;
      this._nullIf = undefined;
      this._replaceInvalidCharacters = undefined;
      this._skipByteOrderMark = undefined;
      this._stripNullValues = undefined;
      this._stripOuterArray = undefined;
      this._timeFormat = undefined;
      this._timestampFormat = undefined;
      this._trimSpace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowDuplicate = value.allowDuplicate;
      this._binaryFormat = value.binaryFormat;
      this._compression = value.compression;
      this._dateFormat = value.dateFormat;
      this._enableOctal = value.enableOctal;
      this._fileExtension = value.fileExtension;
      this._ignoreUtf8Errors = value.ignoreUtf8Errors;
      this._multiLine = value.multiLine;
      this._nullIf = value.nullIf;
      this._replaceInvalidCharacters = value.replaceInvalidCharacters;
      this._skipByteOrderMark = value.skipByteOrderMark;
      this._stripNullValues = value.stripNullValues;
      this._stripOuterArray = value.stripOuterArray;
      this._timeFormat = value.timeFormat;
      this._timestampFormat = value.timestampFormat;
      this._trimSpace = value.trimSpace;
    }
  }

  // allow_duplicate - computed: false, optional: true, required: false
  private _allowDuplicate?: string; 
  public get allowDuplicate() {
    return this.getStringAttribute('allow_duplicate');
  }
  public set allowDuplicate(value: string) {
    this._allowDuplicate = value;
  }
  public resetAllowDuplicate() {
    this._allowDuplicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicateInput() {
    return this._allowDuplicate;
  }

  // binary_format - computed: false, optional: true, required: false
  private _binaryFormat?: string; 
  public get binaryFormat() {
    return this.getStringAttribute('binary_format');
  }
  public set binaryFormat(value: string) {
    this._binaryFormat = value;
  }
  public resetBinaryFormat() {
    this._binaryFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryFormatInput() {
    return this._binaryFormat;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // date_format - computed: false, optional: true, required: false
  private _dateFormat?: string; 
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }
  public set dateFormat(value: string) {
    this._dateFormat = value;
  }
  public resetDateFormat() {
    this._dateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFormatInput() {
    return this._dateFormat;
  }

  // enable_octal - computed: false, optional: true, required: false
  private _enableOctal?: string; 
  public get enableOctal() {
    return this.getStringAttribute('enable_octal');
  }
  public set enableOctal(value: string) {
    this._enableOctal = value;
  }
  public resetEnableOctal() {
    this._enableOctal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOctalInput() {
    return this._enableOctal;
  }

  // file_extension - computed: false, optional: true, required: false
  private _fileExtension?: string; 
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }
  public set fileExtension(value: string) {
    this._fileExtension = value;
  }
  public resetFileExtension() {
    this._fileExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionInput() {
    return this._fileExtension;
  }

  // ignore_utf8_errors - computed: false, optional: true, required: false
  private _ignoreUtf8Errors?: string; 
  public get ignoreUtf8Errors() {
    return this.getStringAttribute('ignore_utf8_errors');
  }
  public set ignoreUtf8Errors(value: string) {
    this._ignoreUtf8Errors = value;
  }
  public resetIgnoreUtf8Errors() {
    this._ignoreUtf8Errors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUtf8ErrorsInput() {
    return this._ignoreUtf8Errors;
  }

  // multi_line - computed: false, optional: true, required: false
  private _multiLine?: string; 
  public get multiLine() {
    return this.getStringAttribute('multi_line');
  }
  public set multiLine(value: string) {
    this._multiLine = value;
  }
  public resetMultiLine() {
    this._multiLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiLineInput() {
    return this._multiLine;
  }

  // null_if - computed: false, optional: true, required: false
  private _nullIf?: string[]; 
  public get nullIf() {
    return this.getListAttribute('null_if');
  }
  public set nullIf(value: string[]) {
    this._nullIf = value;
  }
  public resetNullIf() {
    this._nullIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullIfInput() {
    return this._nullIf;
  }

  // replace_invalid_characters - computed: false, optional: true, required: false
  private _replaceInvalidCharacters?: string; 
  public get replaceInvalidCharacters() {
    return this.getStringAttribute('replace_invalid_characters');
  }
  public set replaceInvalidCharacters(value: string) {
    this._replaceInvalidCharacters = value;
  }
  public resetReplaceInvalidCharacters() {
    this._replaceInvalidCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidCharactersInput() {
    return this._replaceInvalidCharacters;
  }

  // skip_byte_order_mark - computed: false, optional: true, required: false
  private _skipByteOrderMark?: string; 
  public get skipByteOrderMark() {
    return this.getStringAttribute('skip_byte_order_mark');
  }
  public set skipByteOrderMark(value: string) {
    this._skipByteOrderMark = value;
  }
  public resetSkipByteOrderMark() {
    this._skipByteOrderMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipByteOrderMarkInput() {
    return this._skipByteOrderMark;
  }

  // strip_null_values - computed: false, optional: true, required: false
  private _stripNullValues?: string; 
  public get stripNullValues() {
    return this.getStringAttribute('strip_null_values');
  }
  public set stripNullValues(value: string) {
    this._stripNullValues = value;
  }
  public resetStripNullValues() {
    this._stripNullValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripNullValuesInput() {
    return this._stripNullValues;
  }

  // strip_outer_array - computed: false, optional: true, required: false
  private _stripOuterArray?: string; 
  public get stripOuterArray() {
    return this.getStringAttribute('strip_outer_array');
  }
  public set stripOuterArray(value: string) {
    this._stripOuterArray = value;
  }
  public resetStripOuterArray() {
    this._stripOuterArray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripOuterArrayInput() {
    return this._stripOuterArray;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // timestamp_format - computed: false, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
  }

  // trim_space - computed: false, optional: true, required: false
  private _trimSpace?: string; 
  public get trimSpace() {
    return this.getStringAttribute('trim_space');
  }
  public set trimSpace(value: string) {
    this._trimSpace = value;
  }
  public resetTrimSpace() {
    this._trimSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimSpaceInput() {
    return this._trimSpace;
  }
}
export interface StageExternalS3FileFormatOrc {
  /**
  * String used to convert to and from SQL NULL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#null_if StageExternalS3#null_if}
  */
  readonly nullIf?: string[];
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#replace_invalid_characters StageExternalS3#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#trim_space StageExternalS3#trim_space}
  */
  readonly trimSpace?: string;
}

export function stageExternalS3FileFormatOrcToTerraform(struct?: StageExternalS3FileFormatOrcOutputReference | StageExternalS3FileFormatOrc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_if: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nullIf),
    replace_invalid_characters: cdktn.stringToTerraform(struct!.replaceInvalidCharacters),
    trim_space: cdktn.stringToTerraform(struct!.trimSpace),
  }
}


export function stageExternalS3FileFormatOrcToHclTerraform(struct?: StageExternalS3FileFormatOrcOutputReference | StageExternalS3FileFormatOrc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_if: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nullIf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    replace_invalid_characters: {
      value: cdktn.stringToHclTerraform(struct!.replaceInvalidCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trim_space: {
      value: cdktn.stringToHclTerraform(struct!.trimSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalS3FileFormatOrcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalS3FileFormatOrc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullIf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullIf = this._nullIf;
    }
    if (this._replaceInvalidCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceInvalidCharacters = this._replaceInvalidCharacters;
    }
    if (this._trimSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.trimSpace = this._trimSpace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3FileFormatOrc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nullIf = undefined;
      this._replaceInvalidCharacters = undefined;
      this._trimSpace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nullIf = value.nullIf;
      this._replaceInvalidCharacters = value.replaceInvalidCharacters;
      this._trimSpace = value.trimSpace;
    }
  }

  // null_if - computed: false, optional: true, required: false
  private _nullIf?: string[]; 
  public get nullIf() {
    return this.getListAttribute('null_if');
  }
  public set nullIf(value: string[]) {
    this._nullIf = value;
  }
  public resetNullIf() {
    this._nullIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullIfInput() {
    return this._nullIf;
  }

  // replace_invalid_characters - computed: false, optional: true, required: false
  private _replaceInvalidCharacters?: string; 
  public get replaceInvalidCharacters() {
    return this.getStringAttribute('replace_invalid_characters');
  }
  public set replaceInvalidCharacters(value: string) {
    this._replaceInvalidCharacters = value;
  }
  public resetReplaceInvalidCharacters() {
    this._replaceInvalidCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidCharactersInput() {
    return this._replaceInvalidCharacters;
  }

  // trim_space - computed: false, optional: true, required: false
  private _trimSpace?: string; 
  public get trimSpace() {
    return this.getStringAttribute('trim_space');
  }
  public set trimSpace(value: string) {
    this._trimSpace = value;
  }
  public resetTrimSpace() {
    this._trimSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimSpaceInput() {
    return this._trimSpace;
  }
}
export interface StageExternalS3FileFormatParquet {
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#binary_as_text StageExternalS3#binary_as_text}
  */
  readonly binaryAsText?: string;
  /**
  * Specifies the compression format. Valid values: `AUTO` | `LZO` | `SNAPPY` | `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#compression StageExternalS3#compression}
  */
  readonly compression?: string;
  /**
  * String used to convert to and from SQL NULL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#null_if StageExternalS3#null_if}
  */
  readonly nullIf?: string[];
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#replace_invalid_characters StageExternalS3#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#trim_space StageExternalS3#trim_space}
  */
  readonly trimSpace?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#use_logical_type StageExternalS3#use_logical_type}
  */
  readonly useLogicalType?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#use_vectorized_scanner StageExternalS3#use_vectorized_scanner}
  */
  readonly useVectorizedScanner?: string;
}

export function stageExternalS3FileFormatParquetToTerraform(struct?: StageExternalS3FileFormatParquetOutputReference | StageExternalS3FileFormatParquet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_as_text: cdktn.stringToTerraform(struct!.binaryAsText),
    compression: cdktn.stringToTerraform(struct!.compression),
    null_if: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nullIf),
    replace_invalid_characters: cdktn.stringToTerraform(struct!.replaceInvalidCharacters),
    trim_space: cdktn.stringToTerraform(struct!.trimSpace),
    use_logical_type: cdktn.stringToTerraform(struct!.useLogicalType),
    use_vectorized_scanner: cdktn.stringToTerraform(struct!.useVectorizedScanner),
  }
}


export function stageExternalS3FileFormatParquetToHclTerraform(struct?: StageExternalS3FileFormatParquetOutputReference | StageExternalS3FileFormatParquet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary_as_text: {
      value: cdktn.stringToHclTerraform(struct!.binaryAsText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_if: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nullIf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    replace_invalid_characters: {
      value: cdktn.stringToHclTerraform(struct!.replaceInvalidCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trim_space: {
      value: cdktn.stringToHclTerraform(struct!.trimSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_logical_type: {
      value: cdktn.stringToHclTerraform(struct!.useLogicalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_vectorized_scanner: {
      value: cdktn.stringToHclTerraform(struct!.useVectorizedScanner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalS3FileFormatParquetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalS3FileFormatParquet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryAsText !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryAsText = this._binaryAsText;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._nullIf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullIf = this._nullIf;
    }
    if (this._replaceInvalidCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceInvalidCharacters = this._replaceInvalidCharacters;
    }
    if (this._trimSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.trimSpace = this._trimSpace;
    }
    if (this._useLogicalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLogicalType = this._useLogicalType;
    }
    if (this._useVectorizedScanner !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVectorizedScanner = this._useVectorizedScanner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3FileFormatParquet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._binaryAsText = undefined;
      this._compression = undefined;
      this._nullIf = undefined;
      this._replaceInvalidCharacters = undefined;
      this._trimSpace = undefined;
      this._useLogicalType = undefined;
      this._useVectorizedScanner = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._binaryAsText = value.binaryAsText;
      this._compression = value.compression;
      this._nullIf = value.nullIf;
      this._replaceInvalidCharacters = value.replaceInvalidCharacters;
      this._trimSpace = value.trimSpace;
      this._useLogicalType = value.useLogicalType;
      this._useVectorizedScanner = value.useVectorizedScanner;
    }
  }

  // binary_as_text - computed: false, optional: true, required: false
  private _binaryAsText?: string; 
  public get binaryAsText() {
    return this.getStringAttribute('binary_as_text');
  }
  public set binaryAsText(value: string) {
    this._binaryAsText = value;
  }
  public resetBinaryAsText() {
    this._binaryAsText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAsTextInput() {
    return this._binaryAsText;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // null_if - computed: false, optional: true, required: false
  private _nullIf?: string[]; 
  public get nullIf() {
    return this.getListAttribute('null_if');
  }
  public set nullIf(value: string[]) {
    this._nullIf = value;
  }
  public resetNullIf() {
    this._nullIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullIfInput() {
    return this._nullIf;
  }

  // replace_invalid_characters - computed: false, optional: true, required: false
  private _replaceInvalidCharacters?: string; 
  public get replaceInvalidCharacters() {
    return this.getStringAttribute('replace_invalid_characters');
  }
  public set replaceInvalidCharacters(value: string) {
    this._replaceInvalidCharacters = value;
  }
  public resetReplaceInvalidCharacters() {
    this._replaceInvalidCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidCharactersInput() {
    return this._replaceInvalidCharacters;
  }

  // trim_space - computed: false, optional: true, required: false
  private _trimSpace?: string; 
  public get trimSpace() {
    return this.getStringAttribute('trim_space');
  }
  public set trimSpace(value: string) {
    this._trimSpace = value;
  }
  public resetTrimSpace() {
    this._trimSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimSpaceInput() {
    return this._trimSpace;
  }

  // use_logical_type - computed: false, optional: true, required: false
  private _useLogicalType?: string; 
  public get useLogicalType() {
    return this.getStringAttribute('use_logical_type');
  }
  public set useLogicalType(value: string) {
    this._useLogicalType = value;
  }
  public resetUseLogicalType() {
    this._useLogicalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLogicalTypeInput() {
    return this._useLogicalType;
  }

  // use_vectorized_scanner - computed: false, optional: true, required: false
  private _useVectorizedScanner?: string; 
  public get useVectorizedScanner() {
    return this.getStringAttribute('use_vectorized_scanner');
  }
  public set useVectorizedScanner(value: string) {
    this._useVectorizedScanner = value;
  }
  public resetUseVectorizedScanner() {
    this._useVectorizedScanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVectorizedScannerInput() {
    return this._useVectorizedScanner;
  }
}
export interface StageExternalS3FileFormatXml {
  /**
  * Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#compression StageExternalS3#compression}
  */
  readonly compression?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#disable_auto_convert StageExternalS3#disable_auto_convert}
  */
  readonly disableAutoConvert?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#ignore_utf8_errors StageExternalS3#ignore_utf8_errors}
  */
  readonly ignoreUtf8Errors?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#preserve_space StageExternalS3#preserve_space}
  */
  readonly preserveSpace?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#replace_invalid_characters StageExternalS3#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#skip_byte_order_mark StageExternalS3#skip_byte_order_mark}
  */
  readonly skipByteOrderMark?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#strip_outer_element StageExternalS3#strip_outer_element}
  */
  readonly stripOuterElement?: string;
}

export function stageExternalS3FileFormatXmlToTerraform(struct?: StageExternalS3FileFormatXmlOutputReference | StageExternalS3FileFormatXml): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktn.stringToTerraform(struct!.compression),
    disable_auto_convert: cdktn.stringToTerraform(struct!.disableAutoConvert),
    ignore_utf8_errors: cdktn.stringToTerraform(struct!.ignoreUtf8Errors),
    preserve_space: cdktn.stringToTerraform(struct!.preserveSpace),
    replace_invalid_characters: cdktn.stringToTerraform(struct!.replaceInvalidCharacters),
    skip_byte_order_mark: cdktn.stringToTerraform(struct!.skipByteOrderMark),
    strip_outer_element: cdktn.stringToTerraform(struct!.stripOuterElement),
  }
}


export function stageExternalS3FileFormatXmlToHclTerraform(struct?: StageExternalS3FileFormatXmlOutputReference | StageExternalS3FileFormatXml): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_auto_convert: {
      value: cdktn.stringToHclTerraform(struct!.disableAutoConvert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_utf8_errors: {
      value: cdktn.stringToHclTerraform(struct!.ignoreUtf8Errors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_space: {
      value: cdktn.stringToHclTerraform(struct!.preserveSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_invalid_characters: {
      value: cdktn.stringToHclTerraform(struct!.replaceInvalidCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_byte_order_mark: {
      value: cdktn.stringToHclTerraform(struct!.skipByteOrderMark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_outer_element: {
      value: cdktn.stringToHclTerraform(struct!.stripOuterElement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalS3FileFormatXmlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalS3FileFormatXml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._disableAutoConvert !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutoConvert = this._disableAutoConvert;
    }
    if (this._ignoreUtf8Errors !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUtf8Errors = this._ignoreUtf8Errors;
    }
    if (this._preserveSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveSpace = this._preserveSpace;
    }
    if (this._replaceInvalidCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceInvalidCharacters = this._replaceInvalidCharacters;
    }
    if (this._skipByteOrderMark !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipByteOrderMark = this._skipByteOrderMark;
    }
    if (this._stripOuterElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripOuterElement = this._stripOuterElement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3FileFormatXml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compression = undefined;
      this._disableAutoConvert = undefined;
      this._ignoreUtf8Errors = undefined;
      this._preserveSpace = undefined;
      this._replaceInvalidCharacters = undefined;
      this._skipByteOrderMark = undefined;
      this._stripOuterElement = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compression = value.compression;
      this._disableAutoConvert = value.disableAutoConvert;
      this._ignoreUtf8Errors = value.ignoreUtf8Errors;
      this._preserveSpace = value.preserveSpace;
      this._replaceInvalidCharacters = value.replaceInvalidCharacters;
      this._skipByteOrderMark = value.skipByteOrderMark;
      this._stripOuterElement = value.stripOuterElement;
    }
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // disable_auto_convert - computed: false, optional: true, required: false
  private _disableAutoConvert?: string; 
  public get disableAutoConvert() {
    return this.getStringAttribute('disable_auto_convert');
  }
  public set disableAutoConvert(value: string) {
    this._disableAutoConvert = value;
  }
  public resetDisableAutoConvert() {
    this._disableAutoConvert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoConvertInput() {
    return this._disableAutoConvert;
  }

  // ignore_utf8_errors - computed: false, optional: true, required: false
  private _ignoreUtf8Errors?: string; 
  public get ignoreUtf8Errors() {
    return this.getStringAttribute('ignore_utf8_errors');
  }
  public set ignoreUtf8Errors(value: string) {
    this._ignoreUtf8Errors = value;
  }
  public resetIgnoreUtf8Errors() {
    this._ignoreUtf8Errors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUtf8ErrorsInput() {
    return this._ignoreUtf8Errors;
  }

  // preserve_space - computed: false, optional: true, required: false
  private _preserveSpace?: string; 
  public get preserveSpace() {
    return this.getStringAttribute('preserve_space');
  }
  public set preserveSpace(value: string) {
    this._preserveSpace = value;
  }
  public resetPreserveSpace() {
    this._preserveSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSpaceInput() {
    return this._preserveSpace;
  }

  // replace_invalid_characters - computed: false, optional: true, required: false
  private _replaceInvalidCharacters?: string; 
  public get replaceInvalidCharacters() {
    return this.getStringAttribute('replace_invalid_characters');
  }
  public set replaceInvalidCharacters(value: string) {
    this._replaceInvalidCharacters = value;
  }
  public resetReplaceInvalidCharacters() {
    this._replaceInvalidCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidCharactersInput() {
    return this._replaceInvalidCharacters;
  }

  // skip_byte_order_mark - computed: false, optional: true, required: false
  private _skipByteOrderMark?: string; 
  public get skipByteOrderMark() {
    return this.getStringAttribute('skip_byte_order_mark');
  }
  public set skipByteOrderMark(value: string) {
    this._skipByteOrderMark = value;
  }
  public resetSkipByteOrderMark() {
    this._skipByteOrderMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipByteOrderMarkInput() {
    return this._skipByteOrderMark;
  }

  // strip_outer_element - computed: false, optional: true, required: false
  private _stripOuterElement?: string; 
  public get stripOuterElement() {
    return this.getStringAttribute('strip_outer_element');
  }
  public set stripOuterElement(value: string) {
    this._stripOuterElement = value;
  }
  public resetStripOuterElement() {
    this._stripOuterElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripOuterElementInput() {
    return this._stripOuterElement;
  }
}
export interface StageExternalS3FileFormat {
  /**
  * Fully qualified name of the file format (e.g., 'database.schema.format_name').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#format_name StageExternalS3#format_name}
  */
  readonly formatName?: string;
  /**
  * avro block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#avro StageExternalS3#avro}
  */
  readonly avro?: StageExternalS3FileFormatAvro;
  /**
  * csv block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#csv StageExternalS3#csv}
  */
  readonly csv?: StageExternalS3FileFormatCsv;
  /**
  * json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#json StageExternalS3#json}
  */
  readonly json?: StageExternalS3FileFormatJson;
  /**
  * orc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#orc StageExternalS3#orc}
  */
  readonly orc?: StageExternalS3FileFormatOrc;
  /**
  * parquet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#parquet StageExternalS3#parquet}
  */
  readonly parquet?: StageExternalS3FileFormatParquet;
  /**
  * xml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#xml StageExternalS3#xml}
  */
  readonly xml?: StageExternalS3FileFormatXml;
}

export function stageExternalS3FileFormatToTerraform(struct?: StageExternalS3FileFormatOutputReference | StageExternalS3FileFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format_name: cdktn.stringToTerraform(struct!.formatName),
    avro: stageExternalS3FileFormatAvroToTerraform(struct!.avro),
    csv: stageExternalS3FileFormatCsvToTerraform(struct!.csv),
    json: stageExternalS3FileFormatJsonToTerraform(struct!.json),
    orc: stageExternalS3FileFormatOrcToTerraform(struct!.orc),
    parquet: stageExternalS3FileFormatParquetToTerraform(struct!.parquet),
    xml: stageExternalS3FileFormatXmlToTerraform(struct!.xml),
  }
}


export function stageExternalS3FileFormatToHclTerraform(struct?: StageExternalS3FileFormatOutputReference | StageExternalS3FileFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format_name: {
      value: cdktn.stringToHclTerraform(struct!.formatName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    avro: {
      value: stageExternalS3FileFormatAvroToHclTerraform(struct!.avro),
      isBlock: true,
      type: "list",
      storageClassType: "StageExternalS3FileFormatAvroList",
    },
    csv: {
      value: stageExternalS3FileFormatCsvToHclTerraform(struct!.csv),
      isBlock: true,
      type: "list",
      storageClassType: "StageExternalS3FileFormatCsvList",
    },
    json: {
      value: stageExternalS3FileFormatJsonToHclTerraform(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "StageExternalS3FileFormatJsonList",
    },
    orc: {
      value: stageExternalS3FileFormatOrcToHclTerraform(struct!.orc),
      isBlock: true,
      type: "list",
      storageClassType: "StageExternalS3FileFormatOrcList",
    },
    parquet: {
      value: stageExternalS3FileFormatParquetToHclTerraform(struct!.parquet),
      isBlock: true,
      type: "list",
      storageClassType: "StageExternalS3FileFormatParquetList",
    },
    xml: {
      value: stageExternalS3FileFormatXmlToHclTerraform(struct!.xml),
      isBlock: true,
      type: "list",
      storageClassType: "StageExternalS3FileFormatXmlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalS3FileFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalS3FileFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._formatName !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatName = this._formatName;
    }
    if (this._avro?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avro = this._avro?.internalValue;
    }
    if (this._csv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csv = this._csv?.internalValue;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    if (this._orc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orc = this._orc?.internalValue;
    }
    if (this._parquet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parquet = this._parquet?.internalValue;
    }
    if (this._xml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xml = this._xml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalS3FileFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._formatName = undefined;
      this._avro.internalValue = undefined;
      this._csv.internalValue = undefined;
      this._json.internalValue = undefined;
      this._orc.internalValue = undefined;
      this._parquet.internalValue = undefined;
      this._xml.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._formatName = value.formatName;
      this._avro.internalValue = value.avro;
      this._csv.internalValue = value.csv;
      this._json.internalValue = value.json;
      this._orc.internalValue = value.orc;
      this._parquet.internalValue = value.parquet;
      this._xml.internalValue = value.xml;
    }
  }

  // format_name - computed: false, optional: true, required: false
  private _formatName?: string; 
  public get formatName() {
    return this.getStringAttribute('format_name');
  }
  public set formatName(value: string) {
    this._formatName = value;
  }
  public resetFormatName() {
    this._formatName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatNameInput() {
    return this._formatName;
  }

  // avro - computed: false, optional: true, required: false
  private _avro = new StageExternalS3FileFormatAvroOutputReference(this, "avro");
  public get avro() {
    return this._avro;
  }
  public putAvro(value: StageExternalS3FileFormatAvro) {
    this._avro.internalValue = value;
  }
  public resetAvro() {
    this._avro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroInput() {
    return this._avro.internalValue;
  }

  // csv - computed: false, optional: true, required: false
  private _csv = new StageExternalS3FileFormatCsvOutputReference(this, "csv");
  public get csv() {
    return this._csv;
  }
  public putCsv(value: StageExternalS3FileFormatCsv) {
    this._csv.internalValue = value;
  }
  public resetCsv() {
    this._csv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv.internalValue;
  }

  // json - computed: false, optional: true, required: false
  private _json = new StageExternalS3FileFormatJsonOutputReference(this, "json");
  public get json() {
    return this._json;
  }
  public putJson(value: StageExternalS3FileFormatJson) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // orc - computed: false, optional: true, required: false
  private _orc = new StageExternalS3FileFormatOrcOutputReference(this, "orc");
  public get orc() {
    return this._orc;
  }
  public putOrc(value: StageExternalS3FileFormatOrc) {
    this._orc.internalValue = value;
  }
  public resetOrc() {
    this._orc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orcInput() {
    return this._orc.internalValue;
  }

  // parquet - computed: false, optional: true, required: false
  private _parquet = new StageExternalS3FileFormatParquetOutputReference(this, "parquet");
  public get parquet() {
    return this._parquet;
  }
  public putParquet(value: StageExternalS3FileFormatParquet) {
    this._parquet.internalValue = value;
  }
  public resetParquet() {
    this._parquet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parquetInput() {
    return this._parquet.internalValue;
  }

  // xml - computed: false, optional: true, required: false
  private _xml = new StageExternalS3FileFormatXmlOutputReference(this, "xml");
  public get xml() {
    return this._xml;
  }
  public putXml(value: StageExternalS3FileFormatXml) {
    this._xml.internalValue = value;
  }
  public resetXml() {
    this._xml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlInput() {
    return this._xml.internalValue;
  }
}
export interface StageExternalS3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#create StageExternalS3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#delete StageExternalS3#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#read StageExternalS3#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#update StageExternalS3#update}
  */
  readonly update?: string;
}

export function stageExternalS3TimeoutsToTerraform(struct?: StageExternalS3Timeouts | cdktn.IResolvable): any {
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


export function stageExternalS3TimeoutsToHclTerraform(struct?: StageExternalS3Timeouts | cdktn.IResolvable): any {
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

export class StageExternalS3TimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StageExternalS3Timeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: StageExternalS3Timeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3 snowflake_stage_external_s3}
*/
export class StageExternalS3 extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_stage_external_s3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a StageExternalS3 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StageExternalS3 to import
  * @param importFromId The id of the existing StageExternalS3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StageExternalS3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_stage_external_s3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/stage_external_s3 snowflake_stage_external_s3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StageExternalS3Config
  */
  public constructor(scope: Construct, id: string, config: StageExternalS3Config) {
    super(scope, id, {
      terraformResourceType: 'snowflake_stage_external_s3',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.13.0',
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
    this._awsAccessPointArn = config.awsAccessPointArn;
    this._comment = config.comment;
    this._database = config.database;
    this._id = config.id;
    this._name = config.name;
    this._schema = config.schema;
    this._storageIntegration = config.storageIntegration;
    this._url = config.url;
    this._usePrivatelinkEndpoint = config.usePrivatelinkEndpoint;
    this._credentials.internalValue = config.credentials;
    this._directory.internalValue = config.directory;
    this._encryption.internalValue = config.encryption;
    this._fileFormat.internalValue = config.fileFormat;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_access_point_arn - computed: false, optional: true, required: false
  private _awsAccessPointArn?: string; 
  public get awsAccessPointArn() {
    return this.getStringAttribute('aws_access_point_arn');
  }
  public set awsAccessPointArn(value: string) {
    this._awsAccessPointArn = value;
  }
  public resetAwsAccessPointArn() {
    this._awsAccessPointArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessPointArnInput() {
    return this._awsAccessPointArn;
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
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
  private _describeOutput = new StageExternalS3DescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
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
  private _showOutput = new StageExternalS3ShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // stage_type - computed: true, optional: false, required: false
  public get stageType() {
    return this.getStringAttribute('stage_type');
  }

  // storage_integration - computed: false, optional: true, required: false
  private _storageIntegration?: string; 
  public get storageIntegration() {
    return this.getStringAttribute('storage_integration');
  }
  public set storageIntegration(value: string) {
    this._storageIntegration = value;
  }
  public resetStorageIntegration() {
    this._storageIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageIntegrationInput() {
    return this._storageIntegration;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // use_privatelink_endpoint - computed: false, optional: true, required: false
  private _usePrivatelinkEndpoint?: string; 
  public get usePrivatelinkEndpoint() {
    return this.getStringAttribute('use_privatelink_endpoint');
  }
  public set usePrivatelinkEndpoint(value: string) {
    this._usePrivatelinkEndpoint = value;
  }
  public resetUsePrivatelinkEndpoint() {
    this._usePrivatelinkEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePrivatelinkEndpointInput() {
    return this._usePrivatelinkEndpoint;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new StageExternalS3CredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: StageExternalS3Credentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // directory - computed: false, optional: true, required: false
  private _directory = new StageExternalS3DirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: StageExternalS3Directory) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new StageExternalS3EncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: StageExternalS3Encryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // file_format - computed: false, optional: true, required: false
  private _fileFormat = new StageExternalS3FileFormatOutputReference(this, "file_format");
  public get fileFormat() {
    return this._fileFormat;
  }
  public putFileFormat(value: StageExternalS3FileFormat) {
    this._fileFormat.internalValue = value;
  }
  public resetFileFormat() {
    this._fileFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StageExternalS3TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StageExternalS3Timeouts) {
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
      aws_access_point_arn: cdktn.stringToTerraform(this._awsAccessPointArn),
      comment: cdktn.stringToTerraform(this._comment),
      database: cdktn.stringToTerraform(this._database),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      schema: cdktn.stringToTerraform(this._schema),
      storage_integration: cdktn.stringToTerraform(this._storageIntegration),
      url: cdktn.stringToTerraform(this._url),
      use_privatelink_endpoint: cdktn.stringToTerraform(this._usePrivatelinkEndpoint),
      credentials: stageExternalS3CredentialsToTerraform(this._credentials.internalValue),
      directory: stageExternalS3DirectoryToTerraform(this._directory.internalValue),
      encryption: stageExternalS3EncryptionToTerraform(this._encryption.internalValue),
      file_format: stageExternalS3FileFormatToTerraform(this._fileFormat.internalValue),
      timeouts: stageExternalS3TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_access_point_arn: {
        value: cdktn.stringToHclTerraform(this._awsAccessPointArn),
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
      schema: {
        value: cdktn.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_integration: {
        value: cdktn.stringToHclTerraform(this._storageIntegration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktn.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_privatelink_endpoint: {
        value: cdktn.stringToHclTerraform(this._usePrivatelinkEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: stageExternalS3CredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StageExternalS3CredentialsList",
      },
      directory: {
        value: stageExternalS3DirectoryToHclTerraform(this._directory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StageExternalS3DirectoryList",
      },
      encryption: {
        value: stageExternalS3EncryptionToHclTerraform(this._encryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StageExternalS3EncryptionList",
      },
      file_format: {
        value: stageExternalS3FileFormatToHclTerraform(this._fileFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StageExternalS3FileFormatList",
      },
      timeouts: {
        value: stageExternalS3TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StageExternalS3Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
