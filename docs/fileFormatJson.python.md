# `fileFormatJson` Submodule <a name="`fileFormatJson` Submodule" id="@cdktn/provider-snowflake.fileFormatJson"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileFormatJson <a name="FileFormatJson" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json snowflake_file_format_json}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_json

fileFormatJson.FileFormatJson(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  name: str,
  schema: str,
  allow_duplicate: str = None,
  binary_format: str = None,
  comment: str = None,
  compression: str = None,
  date_format: str = None,
  enable_octal: str = None,
  file_extension: str = None,
  id: str = None,
  ignore_utf8_errors: str = None,
  multi_line: str = None,
  null_if: typing.List[str] = None,
  replace_invalid_characters: str = None,
  skip_byte_order_mark: str = None,
  strip_null_values: str = None,
  strip_outer_array: str = None,
  time_format: str = None,
  timeouts: FileFormatJsonTimeouts = None,
  timestamp_format: str = None,
  trim_space: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the file format; |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.allowDuplicate">allow_duplicate</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved). |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.binaryFormat">binary_format</a></code> | <code>str</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.compression">compression</a></code> | <code>str</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.dateFormat">date_format</a></code> | <code>str</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.enableOctal">enable_octal</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.fileExtension">file_extension</a></code> | <code>str</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#id FileFormatJson#id}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.multiLine">multi_line</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.stripNullValues">strip_null_values</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.stripOuterArray">strip_outer_array</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.timeFormat">time_format</a></code> | <code>str</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.timestampFormat">timestamp_format</a></code> | <code>str</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.trimSpace">trim_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#database FileFormatJson#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the file format;

must be unique for the database and schema in which the file format is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#name FileFormatJson#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#schema FileFormatJson#schema}

---

##### `allow_duplicate`<sup>Optional</sup> <a name="allow_duplicate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.allowDuplicate"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#allow_duplicate FileFormatJson#allow_duplicate}

---

##### `binary_format`<sup>Optional</sup> <a name="binary_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.binaryFormat"></a>

- *Type:* str

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#binary_format FileFormatJson#binary_format}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#comment FileFormatJson#comment}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.compression"></a>

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#compression FileFormatJson#compression}

---

##### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.dateFormat"></a>

- *Type:* str

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#date_format FileFormatJson#date_format}

---

##### `enable_octal`<sup>Optional</sup> <a name="enable_octal" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.enableOctal"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#enable_octal FileFormatJson#enable_octal}

---

##### `file_extension`<sup>Optional</sup> <a name="file_extension" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.fileExtension"></a>

- *Type:* str

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#file_extension FileFormatJson#file_extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#id FileFormatJson#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_utf8_errors`<sup>Optional</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.ignoreUtf8Errors"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#ignore_utf8_errors FileFormatJson#ignore_utf8_errors}

---

##### `multi_line`<sup>Optional</sup> <a name="multi_line" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.multiLine"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#multi_line FileFormatJson#multi_line}

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.nullIf"></a>

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#null_if FileFormatJson#null_if}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#replace_invalid_characters FileFormatJson#replace_invalid_characters}

---

##### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.skipByteOrderMark"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#skip_byte_order_mark FileFormatJson#skip_byte_order_mark}

---

##### `strip_null_values`<sup>Optional</sup> <a name="strip_null_values" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.stripNullValues"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#strip_null_values FileFormatJson#strip_null_values}

---

##### `strip_outer_array`<sup>Optional</sup> <a name="strip_outer_array" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.stripOuterArray"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#strip_outer_array FileFormatJson#strip_outer_array}

---

##### `time_format`<sup>Optional</sup> <a name="time_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.timeFormat"></a>

- *Type:* str

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#time_format FileFormatJson#time_format}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#timeouts FileFormatJson#timeouts}

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.timestampFormat"></a>

- *Type:* str

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#timestamp_format FileFormatJson#timestamp_format}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.trimSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#trim_space FileFormatJson#trim_space}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetAllowDuplicate">reset_allow_duplicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetBinaryFormat">reset_binary_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetDateFormat">reset_date_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetEnableOctal">reset_enable_octal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetFileExtension">reset_file_extension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetIgnoreUtf8Errors">reset_ignore_utf8_errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetMultiLine">reset_multi_line</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetNullIf">reset_null_if</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetSkipByteOrderMark">reset_skip_byte_order_mark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetStripNullValues">reset_strip_null_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetStripOuterArray">reset_strip_outer_array</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimeFormat">reset_time_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimestampFormat">reset_timestamp_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTrimSpace">reset_trim_space</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#create FileFormatJson#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#delete FileFormatJson#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#read FileFormatJson#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#update FileFormatJson#update}.

---

##### `reset_allow_duplicate` <a name="reset_allow_duplicate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetAllowDuplicate"></a>

```python
def reset_allow_duplicate() -> None
```

##### `reset_binary_format` <a name="reset_binary_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetBinaryFormat"></a>

```python
def reset_binary_format() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_date_format` <a name="reset_date_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetDateFormat"></a>

```python
def reset_date_format() -> None
```

##### `reset_enable_octal` <a name="reset_enable_octal" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetEnableOctal"></a>

```python
def reset_enable_octal() -> None
```

##### `reset_file_extension` <a name="reset_file_extension" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetFileExtension"></a>

```python
def reset_file_extension() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_utf8_errors` <a name="reset_ignore_utf8_errors" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetIgnoreUtf8Errors"></a>

```python
def reset_ignore_utf8_errors() -> None
```

##### `reset_multi_line` <a name="reset_multi_line" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetMultiLine"></a>

```python
def reset_multi_line() -> None
```

##### `reset_null_if` <a name="reset_null_if" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetNullIf"></a>

```python
def reset_null_if() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_skip_byte_order_mark` <a name="reset_skip_byte_order_mark" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetSkipByteOrderMark"></a>

```python
def reset_skip_byte_order_mark() -> None
```

##### `reset_strip_null_values` <a name="reset_strip_null_values" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetStripNullValues"></a>

```python
def reset_strip_null_values() -> None
```

##### `reset_strip_outer_array` <a name="reset_strip_outer_array" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetStripOuterArray"></a>

```python
def reset_strip_outer_array() -> None
```

##### `reset_time_format` <a name="reset_time_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimeFormat"></a>

```python
def reset_time_format() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timestamp_format` <a name="reset_timestamp_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimestampFormat"></a>

```python
def reset_timestamp_format() -> None
```

##### `reset_trim_space` <a name="reset_trim_space" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTrimSpace"></a>

```python
def reset_trim_space() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FileFormatJson resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isConstruct"></a>

```python
from cdktn_provider_snowflake import file_format_json

fileFormatJson.FileFormatJson.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import file_format_json

fileFormatJson.FileFormatJson.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import file_format_json

fileFormatJson.FileFormatJson.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import file_format_json

fileFormatJson.FileFormatJson.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FileFormatJson resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FileFormatJson to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FileFormatJson that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FileFormatJson to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList">FileFormatJsonDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList">FileFormatJsonShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference">FileFormatJsonTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.allowDuplicateInput">allow_duplicate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.binaryFormatInput">binary_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dateFormatInput">date_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.enableOctalInput">enable_octal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fileExtensionInput">file_extension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.ignoreUtf8ErrorsInput">ignore_utf8_errors_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.multiLineInput">multi_line_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nullIfInput">null_if_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.skipByteOrderMarkInput">skip_byte_order_mark_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripNullValuesInput">strip_null_values_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripOuterArrayInput">strip_outer_array_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeFormatInput">time_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timestampFormatInput">timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.trimSpaceInput">trim_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.allowDuplicate">allow_duplicate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.binaryFormat">binary_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.enableOctal">enable_octal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.multiLine">multi_line</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripNullValues">strip_null_values</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripOuterArray">strip_outer_array</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.trimSpace">trim_space</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.describeOutput"></a>

```python
describe_output: FileFormatJsonDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList">FileFormatJsonDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.showOutput"></a>

```python
show_output: FileFormatJsonShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList">FileFormatJsonShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeouts"></a>

```python
timeouts: FileFormatJsonTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference">FileFormatJsonTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `allow_duplicate_input`<sup>Optional</sup> <a name="allow_duplicate_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.allowDuplicateInput"></a>

```python
allow_duplicate_input: str
```

- *Type:* str

---

##### `binary_format_input`<sup>Optional</sup> <a name="binary_format_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.binaryFormatInput"></a>

```python
binary_format_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `date_format_input`<sup>Optional</sup> <a name="date_format_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dateFormatInput"></a>

```python
date_format_input: str
```

- *Type:* str

---

##### `enable_octal_input`<sup>Optional</sup> <a name="enable_octal_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.enableOctalInput"></a>

```python
enable_octal_input: str
```

- *Type:* str

---

##### `file_extension_input`<sup>Optional</sup> <a name="file_extension_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fileExtensionInput"></a>

```python
file_extension_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_utf8_errors_input`<sup>Optional</sup> <a name="ignore_utf8_errors_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.ignoreUtf8ErrorsInput"></a>

```python
ignore_utf8_errors_input: str
```

- *Type:* str

---

##### `multi_line_input`<sup>Optional</sup> <a name="multi_line_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.multiLineInput"></a>

```python
multi_line_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `null_if_input`<sup>Optional</sup> <a name="null_if_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nullIfInput"></a>

```python
null_if_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `skip_byte_order_mark_input`<sup>Optional</sup> <a name="skip_byte_order_mark_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.skipByteOrderMarkInput"></a>

```python
skip_byte_order_mark_input: str
```

- *Type:* str

---

##### `strip_null_values_input`<sup>Optional</sup> <a name="strip_null_values_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripNullValuesInput"></a>

```python
strip_null_values_input: str
```

- *Type:* str

---

##### `strip_outer_array_input`<sup>Optional</sup> <a name="strip_outer_array_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripOuterArrayInput"></a>

```python
strip_outer_array_input: str
```

- *Type:* str

---

##### `time_format_input`<sup>Optional</sup> <a name="time_format_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeFormatInput"></a>

```python
time_format_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | FileFormatJsonTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a>

---

##### `timestamp_format_input`<sup>Optional</sup> <a name="timestamp_format_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timestampFormatInput"></a>

```python
timestamp_format_input: str
```

- *Type:* str

---

##### `trim_space_input`<sup>Optional</sup> <a name="trim_space_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.trimSpaceInput"></a>

```python
trim_space_input: str
```

- *Type:* str

---

##### `allow_duplicate`<sup>Required</sup> <a name="allow_duplicate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.allowDuplicate"></a>

```python
allow_duplicate: str
```

- *Type:* str

---

##### `binary_format`<sup>Required</sup> <a name="binary_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `enable_octal`<sup>Required</sup> <a name="enable_octal" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.enableOctal"></a>

```python
enable_octal: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_utf8_errors`<sup>Required</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: str
```

- *Type:* str

---

##### `multi_line`<sup>Required</sup> <a name="multi_line" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.multiLine"></a>

```python
multi_line: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

---

##### `strip_null_values`<sup>Required</sup> <a name="strip_null_values" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripNullValues"></a>

```python
strip_null_values: str
```

- *Type:* str

---

##### `strip_outer_array`<sup>Required</sup> <a name="strip_outer_array" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripOuterArray"></a>

```python
strip_outer_array: str
```

- *Type:* str

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FileFormatJsonConfig <a name="FileFormatJsonConfig" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_json

fileFormatJson.FileFormatJsonConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  name: str,
  schema: str,
  allow_duplicate: str = None,
  binary_format: str = None,
  comment: str = None,
  compression: str = None,
  date_format: str = None,
  enable_octal: str = None,
  file_extension: str = None,
  id: str = None,
  ignore_utf8_errors: str = None,
  multi_line: str = None,
  null_if: typing.List[str] = None,
  replace_invalid_characters: str = None,
  skip_byte_order_mark: str = None,
  strip_null_values: str = None,
  strip_outer_array: str = None,
  time_format: str = None,
  timeouts: FileFormatJsonTimeouts = None,
  timestamp_format: str = None,
  trim_space: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the file format; |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.allowDuplicate">allow_duplicate</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved). |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.binaryFormat">binary_format</a></code> | <code>str</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.compression">compression</a></code> | <code>str</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.dateFormat">date_format</a></code> | <code>str</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.enableOctal">enable_octal</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.fileExtension">file_extension</a></code> | <code>str</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#id FileFormatJson#id}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.multiLine">multi_line</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.stripNullValues">strip_null_values</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.stripOuterArray">strip_outer_array</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timeFormat">time_format</a></code> | <code>str</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.trimSpace">trim_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#database FileFormatJson#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the file format;

must be unique for the database and schema in which the file format is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#name FileFormatJson#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#schema FileFormatJson#schema}

---

##### `allow_duplicate`<sup>Optional</sup> <a name="allow_duplicate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.allowDuplicate"></a>

```python
allow_duplicate: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#allow_duplicate FileFormatJson#allow_duplicate}

---

##### `binary_format`<sup>Optional</sup> <a name="binary_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#binary_format FileFormatJson#binary_format}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#comment FileFormatJson#comment}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.compression"></a>

```python
compression: str
```

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#compression FileFormatJson#compression}

---

##### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#date_format FileFormatJson#date_format}

---

##### `enable_octal`<sup>Optional</sup> <a name="enable_octal" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.enableOctal"></a>

```python
enable_octal: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#enable_octal FileFormatJson#enable_octal}

---

##### `file_extension`<sup>Optional</sup> <a name="file_extension" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#file_extension FileFormatJson#file_extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#id FileFormatJson#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_utf8_errors`<sup>Optional</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#ignore_utf8_errors FileFormatJson#ignore_utf8_errors}

---

##### `multi_line`<sup>Optional</sup> <a name="multi_line" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.multiLine"></a>

```python
multi_line: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#multi_line FileFormatJson#multi_line}

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#null_if FileFormatJson#null_if}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#replace_invalid_characters FileFormatJson#replace_invalid_characters}

---

##### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#skip_byte_order_mark FileFormatJson#skip_byte_order_mark}

---

##### `strip_null_values`<sup>Optional</sup> <a name="strip_null_values" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.stripNullValues"></a>

```python
strip_null_values: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#strip_null_values FileFormatJson#strip_null_values}

---

##### `strip_outer_array`<sup>Optional</sup> <a name="strip_outer_array" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.stripOuterArray"></a>

```python
strip_outer_array: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#strip_outer_array FileFormatJson#strip_outer_array}

---

##### `time_format`<sup>Optional</sup> <a name="time_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#time_format FileFormatJson#time_format}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timeouts"></a>

```python
timeouts: FileFormatJsonTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#timeouts FileFormatJson#timeouts}

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#timestamp_format FileFormatJson#timestamp_format}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#trim_space FileFormatJson#trim_space}

---

### FileFormatJsonDescribeOutput <a name="FileFormatJsonDescribeOutput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_json

fileFormatJson.FileFormatJsonDescribeOutput()
```


### FileFormatJsonShowOutput <a name="FileFormatJsonShowOutput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_json

fileFormatJson.FileFormatJsonShowOutput()
```


### FileFormatJsonTimeouts <a name="FileFormatJsonTimeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_json

fileFormatJson.FileFormatJsonTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#create FileFormatJson#create}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#delete FileFormatJson#delete}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#read FileFormatJson#read}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#update FileFormatJson#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#create FileFormatJson#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#delete FileFormatJson#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#read FileFormatJson#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#update FileFormatJson#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileFormatJsonDescribeOutputList <a name="FileFormatJsonDescribeOutputList" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_json

fileFormatJson.FileFormatJsonDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FileFormatJsonDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FileFormatJsonDescribeOutputOutputReference <a name="FileFormatJsonDescribeOutputOutputReference" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_json

fileFormatJson.FileFormatJsonDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.allowDuplicate">allow_duplicate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.binaryFormat">binary_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.enableOctal">enable_octal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.multiLine">multi_line</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.stripNullValues">strip_null_values</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.stripOuterArray">strip_outer_array</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.trimSpace">trim_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutput">FileFormatJsonDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_duplicate`<sup>Required</sup> <a name="allow_duplicate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.allowDuplicate"></a>

```python
allow_duplicate: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `binary_format`<sup>Required</sup> <a name="binary_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `enable_octal`<sup>Required</sup> <a name="enable_octal" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.enableOctal"></a>

```python
enable_octal: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_utf8_errors`<sup>Required</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `multi_line`<sup>Required</sup> <a name="multi_line" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.multiLine"></a>

```python
multi_line: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `strip_null_values`<sup>Required</sup> <a name="strip_null_values" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.stripNullValues"></a>

```python
strip_null_values: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `strip_outer_array`<sup>Required</sup> <a name="strip_outer_array" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.stripOuterArray"></a>

```python
strip_outer_array: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.trimSpace"></a>

```python
trim_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: FileFormatJsonDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutput">FileFormatJsonDescribeOutput</a>

---


### FileFormatJsonShowOutputList <a name="FileFormatJsonShowOutputList" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_json

fileFormatJson.FileFormatJsonShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FileFormatJsonShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FileFormatJsonShowOutputOutputReference <a name="FileFormatJsonShowOutputOutputReference" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_json

fileFormatJson.FileFormatJsonShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.formatOptions">format_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutput">FileFormatJsonShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `format_options`<sup>Required</sup> <a name="format_options" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.formatOptions"></a>

```python
format_options: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: FileFormatJsonShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutput">FileFormatJsonShowOutput</a>

---


### FileFormatJsonTimeoutsOutputReference <a name="FileFormatJsonTimeoutsOutputReference" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_json

fileFormatJson.FileFormatJsonTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FileFormatJsonTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a>

---



