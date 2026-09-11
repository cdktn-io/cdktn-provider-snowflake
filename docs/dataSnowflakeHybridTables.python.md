# `dataSnowflakeHybridTables` Submodule <a name="`dataSnowflakeHybridTables` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeHybridTables <a name="DataSnowflakeHybridTables" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables snowflake_hybrid_tables}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTables(
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
  in: DataSnowflakeHybridTablesIn = None,
  like: str = None,
  limit: DataSnowflakeHybridTablesLimit = None,
  starts_with: str = None,
  with_describe: bool | IResolvable = None,
  with_indexes: bool | IResolvable = None,
  with_keys: bool | IResolvable = None,
  with_parameters: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#id DataSnowflakeHybridTables#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.startsWith">starts_with</a></code> | <code>str</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC TABLE for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.withIndexes">with_indexes</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `false`) Runs SHOW INDEXES for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.withKeys">with_keys</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `false`) Runs SHOW PRIMARY KEYS, SHOW UNIQUE KEYS, and SHOW IMPORTED KEYS for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.withParameters">with_parameters</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs SHOW PARAMETERS FOR TABLE for each hybrid table returned by SHOW HYBRID TABLES. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#id DataSnowflakeHybridTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.in"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#in DataSnowflakeHybridTables#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.like"></a>

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#like DataSnowflakeHybridTables#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.limit"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#limit DataSnowflakeHybridTables#limit}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.startsWith"></a>

- *Type:* str

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#starts_with DataSnowflakeHybridTables#starts_with}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.withDescribe"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC TABLE for each hybrid table returned by SHOW HYBRID TABLES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_describe DataSnowflakeHybridTables#with_describe}

---

##### `with_indexes`<sup>Optional</sup> <a name="with_indexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.withIndexes"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `false`) Runs SHOW INDEXES for each hybrid table returned by SHOW HYBRID TABLES.

The output is saved to the show_indexes field. By default this value is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_indexes DataSnowflakeHybridTables#with_indexes}

---

##### `with_keys`<sup>Optional</sup> <a name="with_keys" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.withKeys"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `false`) Runs SHOW PRIMARY KEYS, SHOW UNIQUE KEYS, and SHOW IMPORTED KEYS for each hybrid table returned by SHOW HYBRID TABLES.

The merged constraints are saved to the show_keys_output field, grouped by constraint name and ordered by kind, then by column names. By default this value is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_keys DataSnowflakeHybridTables#with_keys}

---

##### `with_parameters`<sup>Optional</sup> <a name="with_parameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.withParameters"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs SHOW PARAMETERS FOR TABLE for each hybrid table returned by SHOW HYBRID TABLES.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_parameters DataSnowflakeHybridTables#with_parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putIn">put_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putLimit">put_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetIn">reset_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLike">reset_like</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetStartsWith">reset_starts_with</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithDescribe">reset_with_describe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithIndexes">reset_with_indexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithKeys">reset_with_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithParameters">reset_with_parameters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_in` <a name="put_in" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putIn"></a>

```python
def put_in(
  account: bool | IResolvable = None,
  database: str = None,
  schema: str = None
) -> None
```

###### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putIn.parameter.account"></a>

- *Type:* bool | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#account DataSnowflakeHybridTables#account}

---

###### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putIn.parameter.database"></a>

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#database DataSnowflakeHybridTables#database}

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putIn.parameter.schema"></a>

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#schema DataSnowflakeHybridTables#schema}

---

##### `put_limit` <a name="put_limit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putLimit"></a>

```python
def put_limit(
  rows: typing.Union[int, float],
  from: str = None
) -> None
```

###### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putLimit.parameter.rows"></a>

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#rows DataSnowflakeHybridTables#rows}

---

###### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putLimit.parameter.from"></a>

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#from DataSnowflakeHybridTables#from}

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_in` <a name="reset_in" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetIn"></a>

```python
def reset_in() -> None
```

##### `reset_like` <a name="reset_like" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLike"></a>

```python
def reset_like() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_starts_with` <a name="reset_starts_with" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetStartsWith"></a>

```python
def reset_starts_with() -> None
```

##### `reset_with_describe` <a name="reset_with_describe" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithDescribe"></a>

```python
def reset_with_describe() -> None
```

##### `reset_with_indexes` <a name="reset_with_indexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithIndexes"></a>

```python
def reset_with_indexes() -> None
```

##### `reset_with_keys` <a name="reset_with_keys" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithKeys"></a>

```python
def reset_with_keys() -> None
```

##### `reset_with_parameters` <a name="reset_with_parameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithParameters"></a>

```python
def reset_with_parameters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataSnowflakeHybridTables resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isConstruct"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTables.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTables.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformDataSource"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTables.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTables.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataSnowflakeHybridTables resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeHybridTables to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeHybridTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeHybridTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.hybridTables">hybrid_tables</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList">DataSnowflakeHybridTablesHybridTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference">DataSnowflakeHybridTablesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference">DataSnowflakeHybridTablesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.inInput">in_input</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.likeInput">like_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limitInput">limit_input</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWithInput">starts_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribeInput">with_describe_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexesInput">with_indexes_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeysInput">with_keys_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParametersInput">with_parameters_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.like">like</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWith">starts_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexes">with_indexes</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeys">with_keys</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParameters">with_parameters</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `hybrid_tables`<sup>Required</sup> <a name="hybrid_tables" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.hybridTables"></a>

```python
hybrid_tables: DataSnowflakeHybridTablesHybridTablesList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList">DataSnowflakeHybridTablesHybridTablesList</a>

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.in"></a>

```python
in: DataSnowflakeHybridTablesInOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference">DataSnowflakeHybridTablesInOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limit"></a>

```python
limit: DataSnowflakeHybridTablesLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference">DataSnowflakeHybridTablesLimitOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `in_input`<sup>Optional</sup> <a name="in_input" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.inInput"></a>

```python
in_input: DataSnowflakeHybridTablesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

---

##### `like_input`<sup>Optional</sup> <a name="like_input" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.likeInput"></a>

```python
like_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limitInput"></a>

```python
limit_input: DataSnowflakeHybridTablesLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

---

##### `starts_with_input`<sup>Optional</sup> <a name="starts_with_input" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWithInput"></a>

```python
starts_with_input: str
```

- *Type:* str

---

##### `with_describe_input`<sup>Optional</sup> <a name="with_describe_input" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribeInput"></a>

```python
with_describe_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `with_indexes_input`<sup>Optional</sup> <a name="with_indexes_input" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexesInput"></a>

```python
with_indexes_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `with_keys_input`<sup>Optional</sup> <a name="with_keys_input" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeysInput"></a>

```python
with_keys_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `with_parameters_input`<sup>Optional</sup> <a name="with_parameters_input" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParametersInput"></a>

```python
with_parameters_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.like"></a>

```python
like: str
```

- *Type:* str

---

##### `starts_with`<sup>Required</sup> <a name="starts_with" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

---

##### `with_describe`<sup>Required</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `with_indexes`<sup>Required</sup> <a name="with_indexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexes"></a>

```python
with_indexes: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `with_keys`<sup>Required</sup> <a name="with_keys" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeys"></a>

```python
with_keys: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `with_parameters`<sup>Required</sup> <a name="with_parameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParameters"></a>

```python
with_parameters: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeHybridTablesConfig <a name="DataSnowflakeHybridTablesConfig" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  in: DataSnowflakeHybridTablesIn = None,
  like: str = None,
  limit: DataSnowflakeHybridTablesLimit = None,
  starts_with: str = None,
  with_describe: bool | IResolvable = None,
  with_indexes: bool | IResolvable = None,
  with_keys: bool | IResolvable = None,
  with_parameters: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#id DataSnowflakeHybridTables#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.startsWith">starts_with</a></code> | <code>str</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC TABLE for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withIndexes">with_indexes</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `false`) Runs SHOW INDEXES for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withKeys">with_keys</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `false`) Runs SHOW PRIMARY KEYS, SHOW UNIQUE KEYS, and SHOW IMPORTED KEYS for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withParameters">with_parameters</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs SHOW PARAMETERS FOR TABLE for each hybrid table returned by SHOW HYBRID TABLES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#id DataSnowflakeHybridTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.in"></a>

```python
in: DataSnowflakeHybridTablesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#in DataSnowflakeHybridTables#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.like"></a>

```python
like: str
```

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#like DataSnowflakeHybridTables#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.limit"></a>

```python
limit: DataSnowflakeHybridTablesLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#limit DataSnowflakeHybridTables#limit}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#starts_with DataSnowflakeHybridTables#starts_with}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC TABLE for each hybrid table returned by SHOW HYBRID TABLES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_describe DataSnowflakeHybridTables#with_describe}

---

##### `with_indexes`<sup>Optional</sup> <a name="with_indexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withIndexes"></a>

```python
with_indexes: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `false`) Runs SHOW INDEXES for each hybrid table returned by SHOW HYBRID TABLES.

The output is saved to the show_indexes field. By default this value is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_indexes DataSnowflakeHybridTables#with_indexes}

---

##### `with_keys`<sup>Optional</sup> <a name="with_keys" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withKeys"></a>

```python
with_keys: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `false`) Runs SHOW PRIMARY KEYS, SHOW UNIQUE KEYS, and SHOW IMPORTED KEYS for each hybrid table returned by SHOW HYBRID TABLES.

The merged constraints are saved to the show_keys_output field, grouped by constraint name and ordered by kind, then by column names. By default this value is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_keys DataSnowflakeHybridTables#with_keys}

---

##### `with_parameters`<sup>Optional</sup> <a name="with_parameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withParameters"></a>

```python
with_parameters: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs SHOW PARAMETERS FOR TABLE for each hybrid table returned by SHOW HYBRID TABLES.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_parameters DataSnowflakeHybridTables#with_parameters}

---

### DataSnowflakeHybridTablesHybridTables <a name="DataSnowflakeHybridTablesHybridTables" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables()
```


### DataSnowflakeHybridTablesHybridTablesDescribeOutput <a name="DataSnowflakeHybridTablesHybridTablesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput()
```


### DataSnowflakeHybridTablesHybridTablesParameters <a name="DataSnowflakeHybridTablesHybridTablesParameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters()
```


### DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays <a name="DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays()
```


### DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays <a name="DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays()
```


### DataSnowflakeHybridTablesHybridTablesShowIndexes <a name="DataSnowflakeHybridTablesHybridTablesShowIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes()
```


### DataSnowflakeHybridTablesHybridTablesShowKeysOutput <a name="DataSnowflakeHybridTablesHybridTablesShowKeysOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput()
```


### DataSnowflakeHybridTablesHybridTablesShowOutput <a name="DataSnowflakeHybridTablesHybridTablesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput()
```


### DataSnowflakeHybridTablesIn <a name="DataSnowflakeHybridTablesIn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn(
  account: bool | IResolvable = None,
  database: str = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.account">account</a></code> | <code>bool \| cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.database">database</a></code> | <code>str</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.schema">schema</a></code> | <code>str</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#account DataSnowflakeHybridTables#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.database"></a>

```python
database: str
```

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#database DataSnowflakeHybridTables#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.schema"></a>

```python
schema: str
```

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#schema DataSnowflakeHybridTables#schema}

---

### DataSnowflakeHybridTablesLimit <a name="DataSnowflakeHybridTablesLimit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit(
  rows: typing.Union[int, float],
  from: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.from">from</a></code> | <code>str</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#rows DataSnowflakeHybridTables#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.from"></a>

```python
from: str
```

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#from DataSnowflakeHybridTables#from}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeHybridTablesHybridTablesDescribeOutputList <a name="DataSnowflakeHybridTablesHybridTablesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference <a name="DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.check">check</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.collation">collation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.isNullable">is_nullable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.primaryKey">primary_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.privacyDomain">privacy_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.schemaEvolutionRecord">schema_evolution_record</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.uniqueKey">unique_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput">DataSnowflakeHybridTablesHybridTablesDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.check"></a>

```python
check: str
```

- *Type:* str

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.collation"></a>

```python
collation: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `is_nullable`<sup>Required</sup> <a name="is_nullable" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.isNullable"></a>

```python
is_nullable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.primaryKey"></a>

```python
primary_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `privacy_domain`<sup>Required</sup> <a name="privacy_domain" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.privacyDomain"></a>

```python
privacy_domain: str
```

- *Type:* str

---

##### `schema_evolution_record`<sup>Required</sup> <a name="schema_evolution_record" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.schemaEvolutionRecord"></a>

```python
schema_evolution_record: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unique_key`<sup>Required</sup> <a name="unique_key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.uniqueKey"></a>

```python
unique_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeHybridTablesHybridTablesDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput">DataSnowflakeHybridTablesHybridTablesDescribeOutput</a>

---


### DataSnowflakeHybridTablesHybridTablesList <a name="DataSnowflakeHybridTablesHybridTablesList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeHybridTablesHybridTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeHybridTablesHybridTablesOutputReference <a name="DataSnowflakeHybridTablesHybridTablesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList">DataSnowflakeHybridTablesHybridTablesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList">DataSnowflakeHybridTablesHybridTablesParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showIndexes">show_indexes</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList">DataSnowflakeHybridTablesHybridTablesShowIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showKeysOutput">show_keys_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList">DataSnowflakeHybridTablesHybridTablesShowKeysOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList">DataSnowflakeHybridTablesHybridTablesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables">DataSnowflakeHybridTablesHybridTables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.describeOutput"></a>

```python
describe_output: DataSnowflakeHybridTablesHybridTablesDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList">DataSnowflakeHybridTablesHybridTablesDescribeOutputList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.parameters"></a>

```python
parameters: DataSnowflakeHybridTablesHybridTablesParametersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList">DataSnowflakeHybridTablesHybridTablesParametersList</a>

---

##### `show_indexes`<sup>Required</sup> <a name="show_indexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showIndexes"></a>

```python
show_indexes: DataSnowflakeHybridTablesHybridTablesShowIndexesList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList">DataSnowflakeHybridTablesHybridTablesShowIndexesList</a>

---

##### `show_keys_output`<sup>Required</sup> <a name="show_keys_output" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showKeysOutput"></a>

```python
show_keys_output: DataSnowflakeHybridTablesHybridTablesShowKeysOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList">DataSnowflakeHybridTablesHybridTablesShowKeysOutputList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakeHybridTablesHybridTablesShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList">DataSnowflakeHybridTablesHybridTablesShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeHybridTablesHybridTables
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables">DataSnowflakeHybridTablesHybridTables</a>

---


### DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList <a name="DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference <a name="DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays</a>

---


### DataSnowflakeHybridTablesHybridTablesParametersList <a name="DataSnowflakeHybridTablesHybridTablesParametersList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeHybridTablesHybridTablesParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList <a name="DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference <a name="DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays</a>

---


### DataSnowflakeHybridTablesHybridTablesParametersOutputReference <a name="DataSnowflakeHybridTablesHybridTablesParametersOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters">DataSnowflakeHybridTablesHybridTablesParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_retention_time_in_days`<sup>Required</sup> <a name="data_retention_time_in_days" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.dataRetentionTimeInDays"></a>

```python
data_retention_time_in_days: DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList</a>

---

##### `max_data_extension_time_in_days`<sup>Required</sup> <a name="max_data_extension_time_in_days" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.maxDataExtensionTimeInDays"></a>

```python
max_data_extension_time_in_days: DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeHybridTablesHybridTablesParameters
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters">DataSnowflakeHybridTablesHybridTablesParameters</a>

---


### DataSnowflakeHybridTablesHybridTablesShowIndexesList <a name="DataSnowflakeHybridTablesHybridTablesShowIndexesList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference <a name="DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.columns">columns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.includedColumns">included_columns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.isUnique">is_unique</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes">DataSnowflakeHybridTablesHybridTablesShowIndexes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.columns"></a>

```python
columns: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `included_columns`<sup>Required</sup> <a name="included_columns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.includedColumns"></a>

```python
included_columns: str
```

- *Type:* str

---

##### `is_unique`<sup>Required</sup> <a name="is_unique" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.isUnique"></a>

```python
is_unique: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeHybridTablesHybridTablesShowIndexes
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes">DataSnowflakeHybridTablesHybridTablesShowIndexes</a>

---


### DataSnowflakeHybridTablesHybridTablesShowKeysOutputList <a name="DataSnowflakeHybridTablesHybridTablesShowKeysOutputList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference <a name="DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.columns">columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.deleteRule">delete_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedColumns">referenced_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedTable">referenced_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.updateRule">update_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput">DataSnowflakeHybridTablesHybridTablesShowKeysOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `delete_rule`<sup>Required</sup> <a name="delete_rule" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.deleteRule"></a>

```python
delete_rule: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `referenced_columns`<sup>Required</sup> <a name="referenced_columns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedColumns"></a>

```python
referenced_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `referenced_table`<sup>Required</sup> <a name="referenced_table" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedTable"></a>

```python
referenced_table: str
```

- *Type:* str

---

##### `update_rule`<sup>Required</sup> <a name="update_rule" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.updateRule"></a>

```python
update_rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeHybridTablesHybridTablesShowKeysOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput">DataSnowflakeHybridTablesHybridTablesShowKeysOutput</a>

---


### DataSnowflakeHybridTablesHybridTablesShowOutputList <a name="DataSnowflakeHybridTablesHybridTablesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference <a name="DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.bytes">bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput">DataSnowflakeHybridTablesHybridTablesShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bytes`<sup>Required</sup> <a name="bytes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.bytes"></a>

```python
bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeHybridTablesHybridTablesShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput">DataSnowflakeHybridTablesHybridTablesShowOutput</a>

---


### DataSnowflakeHybridTablesInOutputReference <a name="DataSnowflakeHybridTablesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account` <a name="reset_account" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.accountInput">account_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.account">account</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.accountInput"></a>

```python
account_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeHybridTablesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

---


### DataSnowflakeHybridTablesLimitOutputReference <a name="DataSnowflakeHybridTablesLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_hybrid_tables

dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resetFrom">reset_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rowsInput">rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `rows_input`<sup>Optional</sup> <a name="rows_input" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rowsInput"></a>

```python
rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeHybridTablesLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

---



