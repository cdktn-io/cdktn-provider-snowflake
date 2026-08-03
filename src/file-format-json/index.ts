/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FileFormatJsonConfig extends cdktn.TerraformMetaArguments {
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#allow_duplicate FileFormatJson#allow_duplicate}
  */
  readonly allowDuplicate?: string;
  /**
  * Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#binary_format FileFormatJson#binary_format}
  */
  readonly binaryFormat?: string;
  /**
  * Specifies a comment for the file format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#comment FileFormatJson#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#compression FileFormatJson#compression}
  */
  readonly compression?: string;
  /**
  * The database in which to create the file format. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#database FileFormatJson#database}
  */
  readonly database: string;
  /**
  * Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#date_format FileFormatJson#date_format}
  */
  readonly dateFormat?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#enable_octal FileFormatJson#enable_octal}
  */
  readonly enableOctal?: string;
  /**
  * Specifies the extension for files unloaded to a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#file_extension FileFormatJson#file_extension}
  */
  readonly fileExtension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#id FileFormatJson#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#ignore_utf8_errors FileFormatJson#ignore_utf8_errors}
  */
  readonly ignoreUtf8Errors?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#multi_line FileFormatJson#multi_line}
  */
  readonly multiLine?: string;
  /**
  * Specifies the identifier for the file format; must be unique for the database and schema in which the file format is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#name FileFormatJson#name}
  */
  readonly name: string;
  /**
  * String used to convert to and from SQL NULL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#null_if FileFormatJson#null_if}
  */
  readonly nullIf?: string[];
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#replace_invalid_characters FileFormatJson#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: string;
  /**
  * The schema in which to create the file format. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#schema FileFormatJson#schema}
  */
  readonly schema: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#skip_byte_order_mark FileFormatJson#skip_byte_order_mark}
  */
  readonly skipByteOrderMark?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#strip_null_values FileFormatJson#strip_null_values}
  */
  readonly stripNullValues?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#strip_outer_array FileFormatJson#strip_outer_array}
  */
  readonly stripOuterArray?: string;
  /**
  * Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#time_format FileFormatJson#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#timestamp_format FileFormatJson#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#trim_space FileFormatJson#trim_space}
  */
  readonly trimSpace?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#timeouts FileFormatJson#timeouts}
  */
  readonly timeouts?: FileFormatJsonTimeouts;
}
export interface FileFormatJsonDescribeOutput {
}

export function fileFormatJsonDescribeOutputToTerraform(struct?: FileFormatJsonDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function fileFormatJsonDescribeOutputToHclTerraform(struct?: FileFormatJsonDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class FileFormatJsonDescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FileFormatJsonDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileFormatJsonDescribeOutput | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

export class FileFormatJsonDescribeOutputList extends cdktn.ComplexList {

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
  public get(index: number): FileFormatJsonDescribeOutputOutputReference {
    return new FileFormatJsonDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FileFormatJsonShowOutput {
}

export function fileFormatJsonShowOutputToTerraform(struct?: FileFormatJsonShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function fileFormatJsonShowOutputToHclTerraform(struct?: FileFormatJsonShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class FileFormatJsonShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FileFormatJsonShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileFormatJsonShowOutput | undefined) {
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

  // format_options - computed: true, optional: false, required: false
  public get formatOptions() {
    return this.getStringAttribute('format_options');
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

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class FileFormatJsonShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): FileFormatJsonShowOutputOutputReference {
    return new FileFormatJsonShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FileFormatJsonTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#create FileFormatJson#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#delete FileFormatJson#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#read FileFormatJson#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#update FileFormatJson#update}
  */
  readonly update?: string;
}

export function fileFormatJsonTimeoutsToTerraform(struct?: FileFormatJsonTimeouts | cdktn.IResolvable): any {
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


export function fileFormatJsonTimeoutsToHclTerraform(struct?: FileFormatJsonTimeouts | cdktn.IResolvable): any {
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

export class FileFormatJsonTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FileFormatJsonTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FileFormatJsonTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json snowflake_file_format_json}
*/
export class FileFormatJson extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_file_format_json";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FileFormatJson resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileFormatJson to import
  * @param importFromId The id of the existing FileFormatJson that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileFormatJson to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_file_format_json", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json snowflake_file_format_json} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileFormatJsonConfig
  */
  public constructor(scope: Construct, id: string, config: FileFormatJsonConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_file_format_json',
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
    this._allowDuplicate = config.allowDuplicate;
    this._binaryFormat = config.binaryFormat;
    this._comment = config.comment;
    this._compression = config.compression;
    this._database = config.database;
    this._dateFormat = config.dateFormat;
    this._enableOctal = config.enableOctal;
    this._fileExtension = config.fileExtension;
    this._id = config.id;
    this._ignoreUtf8Errors = config.ignoreUtf8Errors;
    this._multiLine = config.multiLine;
    this._name = config.name;
    this._nullIf = config.nullIf;
    this._replaceInvalidCharacters = config.replaceInvalidCharacters;
    this._schema = config.schema;
    this._skipByteOrderMark = config.skipByteOrderMark;
    this._stripNullValues = config.stripNullValues;
    this._stripOuterArray = config.stripOuterArray;
    this._timeFormat = config.timeFormat;
    this._timestampFormat = config.timestampFormat;
    this._trimSpace = config.trimSpace;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new FileFormatJsonDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
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
  private _showOutput = new FileFormatJsonShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FileFormatJsonTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FileFormatJsonTimeouts) {
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
      allow_duplicate: cdktn.stringToTerraform(this._allowDuplicate),
      binary_format: cdktn.stringToTerraform(this._binaryFormat),
      comment: cdktn.stringToTerraform(this._comment),
      compression: cdktn.stringToTerraform(this._compression),
      database: cdktn.stringToTerraform(this._database),
      date_format: cdktn.stringToTerraform(this._dateFormat),
      enable_octal: cdktn.stringToTerraform(this._enableOctal),
      file_extension: cdktn.stringToTerraform(this._fileExtension),
      id: cdktn.stringToTerraform(this._id),
      ignore_utf8_errors: cdktn.stringToTerraform(this._ignoreUtf8Errors),
      multi_line: cdktn.stringToTerraform(this._multiLine),
      name: cdktn.stringToTerraform(this._name),
      null_if: cdktn.listMapper(cdktn.stringToTerraform, false)(this._nullIf),
      replace_invalid_characters: cdktn.stringToTerraform(this._replaceInvalidCharacters),
      schema: cdktn.stringToTerraform(this._schema),
      skip_byte_order_mark: cdktn.stringToTerraform(this._skipByteOrderMark),
      strip_null_values: cdktn.stringToTerraform(this._stripNullValues),
      strip_outer_array: cdktn.stringToTerraform(this._stripOuterArray),
      time_format: cdktn.stringToTerraform(this._timeFormat),
      timestamp_format: cdktn.stringToTerraform(this._timestampFormat),
      trim_space: cdktn.stringToTerraform(this._trimSpace),
      timeouts: fileFormatJsonTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_duplicate: {
        value: cdktn.stringToHclTerraform(this._allowDuplicate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binary_format: {
        value: cdktn.stringToHclTerraform(this._binaryFormat),
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
      compression: {
        value: cdktn.stringToHclTerraform(this._compression),
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
      date_format: {
        value: cdktn.stringToHclTerraform(this._dateFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_octal: {
        value: cdktn.stringToHclTerraform(this._enableOctal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_extension: {
        value: cdktn.stringToHclTerraform(this._fileExtension),
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
      ignore_utf8_errors: {
        value: cdktn.stringToHclTerraform(this._ignoreUtf8Errors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_line: {
        value: cdktn.stringToHclTerraform(this._multiLine),
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
      null_if: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._nullIf),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      replace_invalid_characters: {
        value: cdktn.stringToHclTerraform(this._replaceInvalidCharacters),
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
      skip_byte_order_mark: {
        value: cdktn.stringToHclTerraform(this._skipByteOrderMark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strip_null_values: {
        value: cdktn.stringToHclTerraform(this._stripNullValues),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strip_outer_array: {
        value: cdktn.stringToHclTerraform(this._stripOuterArray),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_format: {
        value: cdktn.stringToHclTerraform(this._timeFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp_format: {
        value: cdktn.stringToHclTerraform(this._timestampFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trim_space: {
        value: cdktn.stringToHclTerraform(this._trimSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: fileFormatJsonTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FileFormatJsonTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
