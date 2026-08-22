# `dataSnowflakeIcebergTables` Submodule <a name="`dataSnowflakeIcebergTables` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeIcebergTables <a name="DataSnowflakeIcebergTables" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables snowflake_iceberg_tables}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTables(
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
  in: DataSnowflakeIcebergTablesIn = None,
  like: str = None,
  limit: DataSnowflakeIcebergTablesLimit = None,
  starts_with: str = None,
  with_describe: bool | IResolvable = None,
  with_parameters: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#id DataSnowflakeIcebergTables#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.startsWith">starts_with</a></code> | <code>str</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.withParameters">with_parameters</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs SHOW PARAMETERS FOR ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#id DataSnowflakeIcebergTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.in"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#in DataSnowflakeIcebergTables#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.like"></a>

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#like DataSnowflakeIcebergTables#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.limit"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#limit DataSnowflakeIcebergTables#limit}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.startsWith"></a>

- *Type:* str

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#starts_with DataSnowflakeIcebergTables#starts_with}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.withDescribe"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#with_describe DataSnowflakeIcebergTables#with_describe}

---

##### `with_parameters`<sup>Optional</sup> <a name="with_parameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.withParameters"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs SHOW PARAMETERS FOR ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#with_parameters DataSnowflakeIcebergTables#with_parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putIn">put_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putLimit">put_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetIn">reset_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetLike">reset_like</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetStartsWith">reset_starts_with</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetWithDescribe">reset_with_describe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetWithParameters">reset_with_parameters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_in` <a name="put_in" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putIn"></a>

```python
def put_in(
  account: bool | IResolvable = None,
  database: str = None,
  schema: str = None
) -> None
```

###### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putIn.parameter.account"></a>

- *Type:* bool | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#account DataSnowflakeIcebergTables#account}

---

###### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putIn.parameter.database"></a>

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#database DataSnowflakeIcebergTables#database}

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putIn.parameter.schema"></a>

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#schema DataSnowflakeIcebergTables#schema}

---

##### `put_limit` <a name="put_limit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putLimit"></a>

```python
def put_limit(
  rows: typing.Union[int, float],
  from: str = None
) -> None
```

###### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putLimit.parameter.rows"></a>

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#rows DataSnowflakeIcebergTables#rows}

---

###### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putLimit.parameter.from"></a>

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#from DataSnowflakeIcebergTables#from}

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_in` <a name="reset_in" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetIn"></a>

```python
def reset_in() -> None
```

##### `reset_like` <a name="reset_like" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetLike"></a>

```python
def reset_like() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_starts_with` <a name="reset_starts_with" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetStartsWith"></a>

```python
def reset_starts_with() -> None
```

##### `reset_with_describe` <a name="reset_with_describe" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetWithDescribe"></a>

```python
def reset_with_describe() -> None
```

##### `reset_with_parameters` <a name="reset_with_parameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetWithParameters"></a>

```python
def reset_with_parameters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataSnowflakeIcebergTables resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isConstruct"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformDataSource"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataSnowflakeIcebergTables resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeIcebergTables to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeIcebergTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeIcebergTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.icebergTables">iceberg_tables</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList">DataSnowflakeIcebergTablesIcebergTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference">DataSnowflakeIcebergTablesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference">DataSnowflakeIcebergTablesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.inInput">in_input</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.likeInput">like_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.limitInput">limit_input</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.startsWithInput">starts_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withDescribeInput">with_describe_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withParametersInput">with_parameters_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.like">like</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.startsWith">starts_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withParameters">with_parameters</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `iceberg_tables`<sup>Required</sup> <a name="iceberg_tables" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.icebergTables"></a>

```python
iceberg_tables: DataSnowflakeIcebergTablesIcebergTablesList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList">DataSnowflakeIcebergTablesIcebergTablesList</a>

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.in"></a>

```python
in: DataSnowflakeIcebergTablesInOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference">DataSnowflakeIcebergTablesInOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.limit"></a>

```python
limit: DataSnowflakeIcebergTablesLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference">DataSnowflakeIcebergTablesLimitOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `in_input`<sup>Optional</sup> <a name="in_input" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.inInput"></a>

```python
in_input: DataSnowflakeIcebergTablesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a>

---

##### `like_input`<sup>Optional</sup> <a name="like_input" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.likeInput"></a>

```python
like_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.limitInput"></a>

```python
limit_input: DataSnowflakeIcebergTablesLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a>

---

##### `starts_with_input`<sup>Optional</sup> <a name="starts_with_input" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.startsWithInput"></a>

```python
starts_with_input: str
```

- *Type:* str

---

##### `with_describe_input`<sup>Optional</sup> <a name="with_describe_input" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withDescribeInput"></a>

```python
with_describe_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `with_parameters_input`<sup>Optional</sup> <a name="with_parameters_input" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withParametersInput"></a>

```python
with_parameters_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.like"></a>

```python
like: str
```

- *Type:* str

---

##### `starts_with`<sup>Required</sup> <a name="starts_with" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

---

##### `with_describe`<sup>Required</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `with_parameters`<sup>Required</sup> <a name="with_parameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withParameters"></a>

```python
with_parameters: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeIcebergTablesConfig <a name="DataSnowflakeIcebergTablesConfig" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  in: DataSnowflakeIcebergTablesIn = None,
  like: str = None,
  limit: DataSnowflakeIcebergTablesLimit = None,
  starts_with: str = None,
  with_describe: bool | IResolvable = None,
  with_parameters: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#id DataSnowflakeIcebergTables#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.startsWith">starts_with</a></code> | <code>str</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.withParameters">with_parameters</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs SHOW PARAMETERS FOR ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#id DataSnowflakeIcebergTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.in"></a>

```python
in: DataSnowflakeIcebergTablesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#in DataSnowflakeIcebergTables#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.like"></a>

```python
like: str
```

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#like DataSnowflakeIcebergTables#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.limit"></a>

```python
limit: DataSnowflakeIcebergTablesLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#limit DataSnowflakeIcebergTables#limit}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#starts_with DataSnowflakeIcebergTables#starts_with}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#with_describe DataSnowflakeIcebergTables#with_describe}

---

##### `with_parameters`<sup>Optional</sup> <a name="with_parameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.withParameters"></a>

```python
with_parameters: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs SHOW PARAMETERS FOR ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#with_parameters DataSnowflakeIcebergTables#with_parameters}

---

### DataSnowflakeIcebergTablesIcebergTables <a name="DataSnowflakeIcebergTablesIcebergTables" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTables.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTables()
```


### DataSnowflakeIcebergTablesIcebergTablesDescribeOutput <a name="DataSnowflakeIcebergTablesIcebergTablesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutput()
```


### DataSnowflakeIcebergTablesIcebergTablesParameters <a name="DataSnowflakeIcebergTablesIcebergTablesParameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParameters.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParameters()
```


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalog <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalog" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalog.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalog()
```


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync()
```


### DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays <a name="DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays()
```


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction()
```


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead()
```


### DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume <a name="DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume()
```


### DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior <a name="DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior()
```


### DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays <a name="DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays()
```


### DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters <a name="DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters()
```


### DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy <a name="DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy()
```


### DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize <a name="DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize()
```


### DataSnowflakeIcebergTablesIcebergTablesShowOutput <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutput()
```


### DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus()
```


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs()
```


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields()
```


### DataSnowflakeIcebergTablesIn <a name="DataSnowflakeIcebergTablesIn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn(
  account: bool | IResolvable = None,
  database: str = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.account">account</a></code> | <code>bool \| cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.database">database</a></code> | <code>str</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.schema">schema</a></code> | <code>str</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#account DataSnowflakeIcebergTables#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.database"></a>

```python
database: str
```

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#database DataSnowflakeIcebergTables#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.schema"></a>

```python
schema: str
```

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#schema DataSnowflakeIcebergTables#schema}

---

### DataSnowflakeIcebergTablesLimit <a name="DataSnowflakeIcebergTablesLimit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit(
  rows: typing.Union[int, float],
  from: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.property.from">from</a></code> | <code>str</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#rows DataSnowflakeIcebergTables#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.property.from"></a>

```python
from: str
```

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/iceberg_tables#from DataSnowflakeIcebergTables#from}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList <a name="DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.check">check</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.isNullable">is_nullable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.nameMapping">name_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.primaryKey">primary_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.privacyDomain">privacy_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.sourceIcebergType">source_iceberg_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.uniqueKey">unique_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.writeDefault">write_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutput">DataSnowflakeIcebergTablesIcebergTablesDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.check"></a>

```python
check: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `is_nullable`<sup>Required</sup> <a name="is_nullable" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.isNullable"></a>

```python
is_nullable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_mapping`<sup>Required</sup> <a name="name_mapping" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.nameMapping"></a>

```python
name_mapping: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.primaryKey"></a>

```python
primary_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `privacy_domain`<sup>Required</sup> <a name="privacy_domain" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.privacyDomain"></a>

```python
privacy_domain: str
```

- *Type:* str

---

##### `source_iceberg_type`<sup>Required</sup> <a name="source_iceberg_type" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.sourceIcebergType"></a>

```python
source_iceberg_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unique_key`<sup>Required</sup> <a name="unique_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.uniqueKey"></a>

```python
unique_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `write_default`<sup>Required</sup> <a name="write_default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.writeDefault"></a>

```python
write_default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesIcebergTablesDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutput">DataSnowflakeIcebergTablesIcebergTablesDescribeOutput</a>

---


### DataSnowflakeIcebergTablesIcebergTablesList <a name="DataSnowflakeIcebergTablesIcebergTablesList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeIcebergTablesIcebergTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeIcebergTablesIcebergTablesOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList">DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList">DataSnowflakeIcebergTablesIcebergTablesParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList">DataSnowflakeIcebergTablesIcebergTablesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTables">DataSnowflakeIcebergTablesIcebergTables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.describeOutput"></a>

```python
describe_output: DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList">DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.parameters"></a>

```python
parameters: DataSnowflakeIcebergTablesIcebergTablesParametersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList">DataSnowflakeIcebergTablesIcebergTablesParametersList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakeIcebergTablesIcebergTablesShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList">DataSnowflakeIcebergTablesIcebergTablesShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesIcebergTables
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTables">DataSnowflakeIcebergTablesIcebergTables</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalog">DataSnowflakeIcebergTablesIcebergTablesParametersCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesIcebergTablesParametersCatalog
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalog">DataSnowflakeIcebergTablesIcebergTablesParametersCatalog</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays">DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays">DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction">DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction">DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead">DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead">DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume">DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume">DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior">DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior">DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays">DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays">DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.catalogSync">catalog_sync</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList">DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.enableDataCompaction">enable_data_compaction</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList">DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.enableIcebergMergeOnRead">enable_iceberg_merge_on_read</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList">DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.externalVolume">external_volume</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList">DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.icebergMergeOnReadBehavior">iceberg_merge_on_read_behavior</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList">DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList">DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList">DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.storageSerializationPolicy">storage_serialization_policy</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList">DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.targetFileSize">target_file_size</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList">DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParameters">DataSnowflakeIcebergTablesIcebergTablesParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.catalog"></a>

```python
catalog: DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList</a>

---

##### `catalog_sync`<sup>Required</sup> <a name="catalog_sync" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.catalogSync"></a>

```python
catalog_sync: DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList</a>

---

##### `data_retention_time_in_days`<sup>Required</sup> <a name="data_retention_time_in_days" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.dataRetentionTimeInDays"></a>

```python
data_retention_time_in_days: DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList">DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList</a>

---

##### `enable_data_compaction`<sup>Required</sup> <a name="enable_data_compaction" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.enableDataCompaction"></a>

```python
enable_data_compaction: DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList">DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList</a>

---

##### `enable_iceberg_merge_on_read`<sup>Required</sup> <a name="enable_iceberg_merge_on_read" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.enableIcebergMergeOnRead"></a>

```python
enable_iceberg_merge_on_read: DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList">DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList</a>

---

##### `external_volume`<sup>Required</sup> <a name="external_volume" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.externalVolume"></a>

```python
external_volume: DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList">DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList</a>

---

##### `iceberg_merge_on_read_behavior`<sup>Required</sup> <a name="iceberg_merge_on_read_behavior" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.icebergMergeOnReadBehavior"></a>

```python
iceberg_merge_on_read_behavior: DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList">DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList</a>

---

##### `max_data_extension_time_in_days`<sup>Required</sup> <a name="max_data_extension_time_in_days" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.maxDataExtensionTimeInDays"></a>

```python
max_data_extension_time_in_days: DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList">DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList</a>

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList">DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList</a>

---

##### `storage_serialization_policy`<sup>Required</sup> <a name="storage_serialization_policy" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.storageSerializationPolicy"></a>

```python
storage_serialization_policy: DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList">DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList</a>

---

##### `target_file_size`<sup>Required</sup> <a name="target_file_size" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.targetFileSize"></a>

```python
target_file_size: DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList">DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesIcebergTablesParameters
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParameters">DataSnowflakeIcebergTablesIcebergTablesParameters</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters">DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters">DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy">DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy">DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize">DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize">DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize</a>

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId">current_snapshot_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.executionState">execution_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime">last_snapshot_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount">pending_snapshot_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus">DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_snapshot_id`<sup>Required</sup> <a name="current_snapshot_id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId"></a>

```python
current_snapshot_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `execution_state`<sup>Required</sup> <a name="execution_state" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.executionState"></a>

```python
execution_state: str
```

- *Type:* str

---

##### `last_snapshot_time`<sup>Required</sup> <a name="last_snapshot_time" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime"></a>

```python
last_snapshot_time: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `pending_snapshot_count`<sup>Required</sup> <a name="pending_snapshot_count" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount"></a>

```python
pending_snapshot_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus">DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus</a>

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputList <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.autoRefreshStatus">auto_refresh_status</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList">DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.baseLocation">base_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.canWriteMetadata">can_write_metadata</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogSyncName">catalog_sync_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogTableName">catalog_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.currentPartitionSpecId">current_partition_spec_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.externalVolumeName">external_volume_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.icebergTableFormatVersion">iceberg_table_format_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.icebergTableType">iceberg_table_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.nameMapping">name_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.partitionSpecs">partition_specs</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutput">DataSnowflakeIcebergTablesIcebergTablesShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_refresh_status`<sup>Required</sup> <a name="auto_refresh_status" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.autoRefreshStatus"></a>

```python
auto_refresh_status: DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList">DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList</a>

---

##### `base_location`<sup>Required</sup> <a name="base_location" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.baseLocation"></a>

```python
base_location: str
```

- *Type:* str

---

##### `can_write_metadata`<sup>Required</sup> <a name="can_write_metadata" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.canWriteMetadata"></a>

```python
can_write_metadata: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `catalog_namespace`<sup>Required</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogNamespace"></a>

```python
catalog_namespace: str
```

- *Type:* str

---

##### `catalog_sync_name`<sup>Required</sup> <a name="catalog_sync_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogSyncName"></a>

```python
catalog_sync_name: str
```

- *Type:* str

---

##### `catalog_table_name`<sup>Required</sup> <a name="catalog_table_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogTableName"></a>

```python
catalog_table_name: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `current_partition_spec_id`<sup>Required</sup> <a name="current_partition_spec_id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.currentPartitionSpecId"></a>

```python
current_partition_spec_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `external_volume_name`<sup>Required</sup> <a name="external_volume_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.externalVolumeName"></a>

```python
external_volume_name: str
```

- *Type:* str

---

##### `iceberg_table_format_version`<sup>Required</sup> <a name="iceberg_table_format_version" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.icebergTableFormatVersion"></a>

```python
iceberg_table_format_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iceberg_table_type`<sup>Required</sup> <a name="iceberg_table_type" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.icebergTableType"></a>

```python
iceberg_table_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_mapping`<sup>Required</sup> <a name="name_mapping" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.nameMapping"></a>

```python
name_mapping: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `partition_specs`<sup>Required</sup> <a name="partition_specs" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.partitionSpecs"></a>

```python
partition_specs: DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList</a>

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesIcebergTablesShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutput">DataSnowflakeIcebergTablesIcebergTablesShowOutput</a>

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.fieldId">field_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.sourceId">source_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.transform">transform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.fieldId"></a>

```python
field_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.sourceId"></a>

```python
source_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.transform"></a>

```python
transform: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields</a>

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.specId">spec_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.fields"></a>

```python
fields: DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList</a>

---

##### `spec_id`<sup>Required</sup> <a name="spec_id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.specId"></a>

```python
spec_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs</a>

---


### DataSnowflakeIcebergTablesInOutputReference <a name="DataSnowflakeIcebergTablesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account` <a name="reset_account" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.accountInput">account_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.account">account</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.accountInput"></a>

```python
account_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a>

---


### DataSnowflakeIcebergTablesLimitOutputReference <a name="DataSnowflakeIcebergTablesLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_iceberg_tables

dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resetFrom">reset_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.rowsInput">rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `rows_input`<sup>Optional</sup> <a name="rows_input" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.rowsInput"></a>

```python
rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeIcebergTablesLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a>

---



