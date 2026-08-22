# `dataSnowflakeFileFormats` Submodule <a name="`dataSnowflakeFileFormats` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeFileFormats <a name="DataSnowflakeFileFormats" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats snowflake_file_formats}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormats(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  in: DataSnowflakeFileFormatsIn = None,
  like: str = None,
  with_describe: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#id DataSnowflakeFileFormats#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC FILE FORMAT for each file format returned by SHOW FILE FORMATS. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#id DataSnowflakeFileFormats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.in"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#in DataSnowflakeFileFormats#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.like"></a>

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#like DataSnowflakeFileFormats#like}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.withDescribe"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC FILE FORMAT for each file format returned by SHOW FILE FORMATS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#with_describe DataSnowflakeFileFormats#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.putIn">put_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetIn">reset_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetLike">reset_like</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetWithDescribe">reset_with_describe</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_in` <a name="put_in" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.putIn"></a>

```python
def put_in(
  account: bool | IResolvable = None,
  database: str = None,
  schema: str = None
) -> None
```

###### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.putIn.parameter.account"></a>

- *Type:* bool | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#account DataSnowflakeFileFormats#account}

---

###### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.putIn.parameter.database"></a>

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#database DataSnowflakeFileFormats#database}

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.putIn.parameter.schema"></a>

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#schema DataSnowflakeFileFormats#schema}

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_in` <a name="reset_in" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetIn"></a>

```python
def reset_in() -> None
```

##### `reset_like` <a name="reset_like" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetLike"></a>

```python
def reset_like() -> None
```

##### `reset_with_describe` <a name="reset_with_describe" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetWithDescribe"></a>

```python
def reset_with_describe() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataSnowflakeFileFormats resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isConstruct"></a>

```python
from cdktn_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormats.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormats.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformDataSource"></a>

```python
from cdktn_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormats.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormats.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataSnowflakeFileFormats resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeFileFormats to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeFileFormats that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeFileFormats to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fileFormats">file_formats</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList">DataSnowflakeFileFormatsFileFormatsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference">DataSnowflakeFileFormatsInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.inInput">in_input</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.likeInput">like_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.withDescribeInput">with_describe_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.like">like</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `file_formats`<sup>Required</sup> <a name="file_formats" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fileFormats"></a>

```python
file_formats: DataSnowflakeFileFormatsFileFormatsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList">DataSnowflakeFileFormatsFileFormatsList</a>

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.in"></a>

```python
in: DataSnowflakeFileFormatsInOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference">DataSnowflakeFileFormatsInOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `in_input`<sup>Optional</sup> <a name="in_input" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.inInput"></a>

```python
in_input: DataSnowflakeFileFormatsIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a>

---

##### `like_input`<sup>Optional</sup> <a name="like_input" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.likeInput"></a>

```python
like_input: str
```

- *Type:* str

---

##### `with_describe_input`<sup>Optional</sup> <a name="with_describe_input" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.withDescribeInput"></a>

```python
with_describe_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.like"></a>

```python
like: str
```

- *Type:* str

---

##### `with_describe`<sup>Required</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeFileFormatsConfig <a name="DataSnowflakeFileFormatsConfig" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  in: DataSnowflakeFileFormatsIn = None,
  like: str = None,
  with_describe: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#id DataSnowflakeFileFormats#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC FILE FORMAT for each file format returned by SHOW FILE FORMATS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#id DataSnowflakeFileFormats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.in"></a>

```python
in: DataSnowflakeFileFormatsIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#in DataSnowflakeFileFormats#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.like"></a>

```python
like: str
```

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#like DataSnowflakeFileFormats#like}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC FILE FORMAT for each file format returned by SHOW FILE FORMATS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#with_describe DataSnowflakeFileFormats#with_describe}

---

### DataSnowflakeFileFormatsFileFormats <a name="DataSnowflakeFileFormatsFileFormats" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats()
```


### DataSnowflakeFileFormatsFileFormatsDescribeOutput <a name="DataSnowflakeFileFormatsFileFormatsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutput()
```


### DataSnowflakeFileFormatsFileFormatsShowOutput <a name="DataSnowflakeFileFormatsFileFormatsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutput()
```


### DataSnowflakeFileFormatsIn <a name="DataSnowflakeFileFormatsIn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn(
  account: bool | IResolvable = None,
  database: str = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.property.account">account</a></code> | <code>bool \| cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.property.database">database</a></code> | <code>str</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.property.schema">schema</a></code> | <code>str</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#account DataSnowflakeFileFormats#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.property.database"></a>

```python
database: str
```

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#database DataSnowflakeFileFormats#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn.property.schema"></a>

```python
schema: str
```

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/file_formats#schema DataSnowflakeFileFormats#schema}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeFileFormatsFileFormatsDescribeOutputList <a name="DataSnowflakeFileFormatsFileFormatsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference <a name="DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.allowDuplicate">allow_duplicate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.binaryAsText">binary_as_text</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.binaryFormat">binary_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.disableAutoConvert">disable_auto_convert</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.emptyFieldAsNull">empty_field_as_null</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.enableOctal">enable_octal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.errorOnColumnCountMismatch">error_on_column_count_mismatch</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.escape">escape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.escapeUnenclosedField">escape_unenclosed_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fieldOptionallyEnclosedBy">field_optionally_enclosed_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.multiLine">multi_line</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.parseHeader">parse_header</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.preserveSpace">preserve_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.skipBlankLines">skip_blank_lines</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.skipHeader">skip_header</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.stripNullValues">strip_null_values</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.stripOuterArray">strip_outer_array</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.stripOuterElement">strip_outer_element</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.trimSpace">trim_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.useLogicalType">use_logical_type</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.useVectorizedScanner">use_vectorized_scanner</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.validateUtf8">validate_utf8</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutput">DataSnowflakeFileFormatsFileFormatsDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_duplicate`<sup>Required</sup> <a name="allow_duplicate" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.allowDuplicate"></a>

```python
allow_duplicate: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `binary_as_text`<sup>Required</sup> <a name="binary_as_text" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.binaryAsText"></a>

```python
binary_as_text: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `binary_format`<sup>Required</sup> <a name="binary_format" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `disable_auto_convert`<sup>Required</sup> <a name="disable_auto_convert" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.disableAutoConvert"></a>

```python
disable_auto_convert: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `empty_field_as_null`<sup>Required</sup> <a name="empty_field_as_null" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.emptyFieldAsNull"></a>

```python
empty_field_as_null: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_octal`<sup>Required</sup> <a name="enable_octal" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.enableOctal"></a>

```python
enable_octal: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `error_on_column_count_mismatch`<sup>Required</sup> <a name="error_on_column_count_mismatch" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.errorOnColumnCountMismatch"></a>

```python
error_on_column_count_mismatch: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `escape`<sup>Required</sup> <a name="escape" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.escape"></a>

```python
escape: str
```

- *Type:* str

---

##### `escape_unenclosed_field`<sup>Required</sup> <a name="escape_unenclosed_field" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.escapeUnenclosedField"></a>

```python
escape_unenclosed_field: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `field_optionally_enclosed_by`<sup>Required</sup> <a name="field_optionally_enclosed_by" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fieldOptionallyEnclosedBy"></a>

```python
field_optionally_enclosed_by: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_utf8_errors`<sup>Required</sup> <a name="ignore_utf8_errors" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `multi_line`<sup>Required</sup> <a name="multi_line" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.multiLine"></a>

```python
multi_line: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parse_header`<sup>Required</sup> <a name="parse_header" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.parseHeader"></a>

```python
parse_header: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `preserve_space`<sup>Required</sup> <a name="preserve_space" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.preserveSpace"></a>

```python
preserve_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `record_delimiter`<sup>Required</sup> <a name="record_delimiter" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_blank_lines`<sup>Required</sup> <a name="skip_blank_lines" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.skipBlankLines"></a>

```python
skip_blank_lines: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_header`<sup>Required</sup> <a name="skip_header" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.skipHeader"></a>

```python
skip_header: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `strip_null_values`<sup>Required</sup> <a name="strip_null_values" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.stripNullValues"></a>

```python
strip_null_values: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `strip_outer_array`<sup>Required</sup> <a name="strip_outer_array" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.stripOuterArray"></a>

```python
strip_outer_array: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `strip_outer_element`<sup>Required</sup> <a name="strip_outer_element" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.stripOuterElement"></a>

```python
strip_outer_element: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.trimSpace"></a>

```python
trim_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `use_logical_type`<sup>Required</sup> <a name="use_logical_type" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.useLogicalType"></a>

```python
use_logical_type: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `use_vectorized_scanner`<sup>Required</sup> <a name="use_vectorized_scanner" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.useVectorizedScanner"></a>

```python
use_vectorized_scanner: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `validate_utf8`<sup>Required</sup> <a name="validate_utf8" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.validateUtf8"></a>

```python
validate_utf8: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeFileFormatsFileFormatsDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutput">DataSnowflakeFileFormatsFileFormatsDescribeOutput</a>

---


### DataSnowflakeFileFormatsFileFormatsList <a name="DataSnowflakeFileFormatsFileFormatsList" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeFileFormatsFileFormatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeFileFormatsFileFormatsOutputReference <a name="DataSnowflakeFileFormatsFileFormatsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList">DataSnowflakeFileFormatsFileFormatsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList">DataSnowflakeFileFormatsFileFormatsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats">DataSnowflakeFileFormatsFileFormats</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.describeOutput"></a>

```python
describe_output: DataSnowflakeFileFormatsFileFormatsDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsDescribeOutputList">DataSnowflakeFileFormatsFileFormatsDescribeOutputList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakeFileFormatsFileFormatsShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList">DataSnowflakeFileFormatsFileFormatsShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeFileFormatsFileFormats
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats">DataSnowflakeFileFormatsFileFormats</a>

---


### DataSnowflakeFileFormatsFileFormatsShowOutputList <a name="DataSnowflakeFileFormatsFileFormatsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference <a name="DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.formatOptions">format_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutput">DataSnowflakeFileFormatsFileFormatsShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `format_options`<sup>Required</sup> <a name="format_options" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.formatOptions"></a>

```python
format_options: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeFileFormatsFileFormatsShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsShowOutput">DataSnowflakeFileFormatsFileFormatsShowOutput</a>

---


### DataSnowflakeFileFormatsInOutputReference <a name="DataSnowflakeFileFormatsInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account` <a name="reset_account" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.accountInput">account_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.account">account</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.accountInput"></a>

```python
account_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsInOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeFileFormatsIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsIn">DataSnowflakeFileFormatsIn</a>

---



