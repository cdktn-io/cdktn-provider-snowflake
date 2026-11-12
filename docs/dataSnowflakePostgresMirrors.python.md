# `dataSnowflakePostgresMirrors` Submodule <a name="`dataSnowflakePostgresMirrors` Submodule" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakePostgresMirrors <a name="DataSnowflakePostgresMirrors" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors snowflake_postgres_mirrors}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_postgres_mirrors

dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors(
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
  postgres_instance: str = None,
  with_describe: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#id DataSnowflakePostgresMirrors#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.postgresInstance">postgres_instance</a></code> | <code>str</code> | Lists only the mirrors that replicate from this Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESCRIBE_MIRROR for each mirror returned by LIST_MIRRORS. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#id DataSnowflakePostgresMirrors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `postgres_instance`<sup>Optional</sup> <a name="postgres_instance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.postgresInstance"></a>

- *Type:* str

Lists only the mirrors that replicate from this Postgres instance.

The name is case-sensitive. A quoted identifier, such as the instance's `fully_qualified_name`, is also accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#postgres_instance DataSnowflakePostgresMirrors#postgres_instance}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.withDescribe"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESCRIBE_MIRROR for each mirror returned by LIST_MIRRORS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#with_describe DataSnowflakePostgresMirrors#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetPostgresInstance">reset_postgres_instance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetWithDescribe">reset_with_describe</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_postgres_instance` <a name="reset_postgres_instance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetPostgresInstance"></a>

```python
def reset_postgres_instance() -> None
```

##### `reset_with_describe` <a name="reset_with_describe" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetWithDescribe"></a>

```python
def reset_with_describe() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataSnowflakePostgresMirrors resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isConstruct"></a>

```python
from cdktn_provider_snowflake import data_snowflake_postgres_mirrors

dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import data_snowflake_postgres_mirrors

dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformDataSource"></a>

```python
from cdktn_provider_snowflake import data_snowflake_postgres_mirrors

dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import data_snowflake_postgres_mirrors

dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataSnowflakePostgresMirrors resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakePostgresMirrors to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakePostgresMirrors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakePostgresMirrors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresMirrors">postgres_mirrors</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList">DataSnowflakePostgresMirrorsPostgresMirrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstanceInput">postgres_instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribeInput">with_describe_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstance">postgres_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `postgres_mirrors`<sup>Required</sup> <a name="postgres_mirrors" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresMirrors"></a>

```python
postgres_mirrors: DataSnowflakePostgresMirrorsPostgresMirrorsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList">DataSnowflakePostgresMirrorsPostgresMirrorsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `postgres_instance_input`<sup>Optional</sup> <a name="postgres_instance_input" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstanceInput"></a>

```python
postgres_instance_input: str
```

- *Type:* str

---

##### `with_describe_input`<sup>Optional</sup> <a name="with_describe_input" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribeInput"></a>

```python
with_describe_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `postgres_instance`<sup>Required</sup> <a name="postgres_instance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstance"></a>

```python
postgres_instance: str
```

- *Type:* str

---

##### `with_describe`<sup>Required</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakePostgresMirrorsConfig <a name="DataSnowflakePostgresMirrorsConfig" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_postgres_mirrors

dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  postgres_instance: str = None,
  with_describe: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#id DataSnowflakePostgresMirrors#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.postgresInstance">postgres_instance</a></code> | <code>str</code> | Lists only the mirrors that replicate from this Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESCRIBE_MIRROR for each mirror returned by LIST_MIRRORS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#id DataSnowflakePostgresMirrors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `postgres_instance`<sup>Optional</sup> <a name="postgres_instance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.postgresInstance"></a>

```python
postgres_instance: str
```

- *Type:* str

Lists only the mirrors that replicate from this Postgres instance.

The name is case-sensitive. A quoted identifier, such as the instance's `fully_qualified_name`, is also accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#postgres_instance DataSnowflakePostgresMirrors#postgres_instance}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESCRIBE_MIRROR for each mirror returned by LIST_MIRRORS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#with_describe DataSnowflakePostgresMirrors#with_describe}

---

### DataSnowflakePostgresMirrorsPostgresMirrors <a name="DataSnowflakePostgresMirrorsPostgresMirrors" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_postgres_mirrors

dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors()
```


### DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput <a name="DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_postgres_mirrors

dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput()
```


### DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput <a name="DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_postgres_mirrors

dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput()
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList <a name="DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_postgres_mirrors

dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference <a name="DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_postgres_mirrors

dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagBytes">apply_lag_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagOperations">apply_lag_operations</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagSeconds">apply_lag_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.catalogIntegrationName">catalog_integration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.externalVolume">external_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.feedOnly">feed_only</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitLsn">last_applied_commit_lsn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitTime">last_applied_commit_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastApplyTime">last_apply_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationId">last_operation_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationTime">last_operation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresDatabase">postgres_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresInstance">postgres_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresSchemas">postgres_schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresStatus">postgres_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresTables">postgres_tables</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.recentQueryDurations">recent_query_durations</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.refreshInterval">refresh_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetDatabase">target_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetTableType">target_table_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.warehouse">warehouse</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_lag_bytes`<sup>Required</sup> <a name="apply_lag_bytes" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagBytes"></a>

```python
apply_lag_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `apply_lag_operations`<sup>Required</sup> <a name="apply_lag_operations" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagOperations"></a>

```python
apply_lag_operations: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `apply_lag_seconds`<sup>Required</sup> <a name="apply_lag_seconds" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagSeconds"></a>

```python
apply_lag_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `catalog_integration_name`<sup>Required</sup> <a name="catalog_integration_name" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.catalogIntegrationName"></a>

```python
catalog_integration_name: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `external_volume`<sup>Required</sup> <a name="external_volume" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

---

##### `feed_only`<sup>Required</sup> <a name="feed_only" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.feedOnly"></a>

```python
feed_only: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `last_applied_commit_lsn`<sup>Required</sup> <a name="last_applied_commit_lsn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitLsn"></a>

```python
last_applied_commit_lsn: str
```

- *Type:* str

---

##### `last_applied_commit_time`<sup>Required</sup> <a name="last_applied_commit_time" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitTime"></a>

```python
last_applied_commit_time: str
```

- *Type:* str

---

##### `last_apply_time`<sup>Required</sup> <a name="last_apply_time" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastApplyTime"></a>

```python
last_apply_time: str
```

- *Type:* str

---

##### `last_operation_id`<sup>Required</sup> <a name="last_operation_id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationId"></a>

```python
last_operation_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_operation_time`<sup>Required</sup> <a name="last_operation_time" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationTime"></a>

```python
last_operation_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `postgres_database`<sup>Required</sup> <a name="postgres_database" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresDatabase"></a>

```python
postgres_database: str
```

- *Type:* str

---

##### `postgres_instance`<sup>Required</sup> <a name="postgres_instance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresInstance"></a>

```python
postgres_instance: str
```

- *Type:* str

---

##### `postgres_schemas`<sup>Required</sup> <a name="postgres_schemas" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresSchemas"></a>

```python
postgres_schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `postgres_status`<sup>Required</sup> <a name="postgres_status" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresStatus"></a>

```python
postgres_status: str
```

- *Type:* str

---

##### `postgres_tables`<sup>Required</sup> <a name="postgres_tables" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresTables"></a>

```python
postgres_tables: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `recent_query_durations`<sup>Required</sup> <a name="recent_query_durations" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.recentQueryDurations"></a>

```python
recent_query_durations: str
```

- *Type:* str

---

##### `refresh_interval`<sup>Required</sup> <a name="refresh_interval" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.refreshInterval"></a>

```python
refresh_interval: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `target_database`<sup>Required</sup> <a name="target_database" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetDatabase"></a>

```python
target_database: str
```

- *Type:* str

---

##### `target_table_type`<sup>Required</sup> <a name="target_table_type" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetTableType"></a>

```python
target_table_type: str
```

- *Type:* str

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.warehouse"></a>

```python
warehouse: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput</a>

---


### DataSnowflakePostgresMirrorsPostgresMirrorsList <a name="DataSnowflakePostgresMirrorsPostgresMirrorsList" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_postgres_mirrors

dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference <a name="DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_postgres_mirrors

dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors">DataSnowflakePostgresMirrorsPostgresMirrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.describeOutput"></a>

```python
describe_output: DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakePostgresMirrorsPostgresMirrors
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors">DataSnowflakePostgresMirrorsPostgresMirrors</a>

---


### DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList <a name="DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_postgres_mirrors

dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference <a name="DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_postgres_mirrors

dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.initialSnapshotTablesRemaining">initial_snapshot_tables_remaining</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastApplyTime">last_apply_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastOperationTime">last_operation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresDatabase">postgres_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresInstance">postgres_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.refreshInterval">refresh_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.tableCount">table_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.targetDatabase">target_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `initial_snapshot_tables_remaining`<sup>Required</sup> <a name="initial_snapshot_tables_remaining" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.initialSnapshotTablesRemaining"></a>

```python
initial_snapshot_tables_remaining: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_apply_time`<sup>Required</sup> <a name="last_apply_time" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastApplyTime"></a>

```python
last_apply_time: str
```

- *Type:* str

---

##### `last_operation_time`<sup>Required</sup> <a name="last_operation_time" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastOperationTime"></a>

```python
last_operation_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `postgres_database`<sup>Required</sup> <a name="postgres_database" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresDatabase"></a>

```python
postgres_database: str
```

- *Type:* str

---

##### `postgres_instance`<sup>Required</sup> <a name="postgres_instance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresInstance"></a>

```python
postgres_instance: str
```

- *Type:* str

---

##### `refresh_interval`<sup>Required</sup> <a name="refresh_interval" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.refreshInterval"></a>

```python
refresh_interval: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `table_count`<sup>Required</sup> <a name="table_count" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.tableCount"></a>

```python
table_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_database`<sup>Required</sup> <a name="target_database" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.targetDatabase"></a>

```python
target_database: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput</a>

---



