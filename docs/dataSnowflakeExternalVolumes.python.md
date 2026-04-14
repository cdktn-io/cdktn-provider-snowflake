# `dataSnowflakeExternalVolumes` Submodule <a name="`dataSnowflakeExternalVolumes` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeExternalVolumes <a name="DataSnowflakeExternalVolumes" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/external_volumes snowflake_external_volumes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes(
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
  like: str = None,
  with_describe: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/external_volumes#id DataSnowflakeExternalVolumes#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC EXTERNAL VOLUME for each external volume returned by SHOW EXTERNAL VOLUMES. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/external_volumes#id DataSnowflakeExternalVolumes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.like"></a>

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/external_volumes#like DataSnowflakeExternalVolumes#like}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.withDescribe"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC EXTERNAL VOLUME for each external volume returned by SHOW EXTERNAL VOLUMES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/external_volumes#with_describe DataSnowflakeExternalVolumes#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetLike">reset_like</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetWithDescribe">reset_with_describe</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_like` <a name="reset_like" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetLike"></a>

```python
def reset_like() -> None
```

##### `reset_with_describe` <a name="reset_with_describe" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetWithDescribe"></a>

```python
def reset_with_describe() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataSnowflakeExternalVolumes resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isConstruct"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isTerraformDataSource"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataSnowflakeExternalVolumes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeExternalVolumes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeExternalVolumes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/external_volumes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeExternalVolumes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.externalVolumes">external_volumes</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList">DataSnowflakeExternalVolumesExternalVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.likeInput">like_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.withDescribeInput">with_describe_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.like">like</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `external_volumes`<sup>Required</sup> <a name="external_volumes" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.externalVolumes"></a>

```python
external_volumes: DataSnowflakeExternalVolumesExternalVolumesList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList">DataSnowflakeExternalVolumesExternalVolumesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `like_input`<sup>Optional</sup> <a name="like_input" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.likeInput"></a>

```python
like_input: str
```

- *Type:* str

---

##### `with_describe_input`<sup>Optional</sup> <a name="with_describe_input" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.withDescribeInput"></a>

```python
with_describe_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.like"></a>

```python
like: str
```

- *Type:* str

---

##### `with_describe`<sup>Required</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeExternalVolumesConfig <a name="DataSnowflakeExternalVolumesConfig" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  like: str = None,
  with_describe: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/external_volumes#id DataSnowflakeExternalVolumes#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC EXTERNAL VOLUME for each external volume returned by SHOW EXTERNAL VOLUMES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/external_volumes#id DataSnowflakeExternalVolumes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.like"></a>

```python
like: str
```

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/external_volumes#like DataSnowflakeExternalVolumes#like}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC EXTERNAL VOLUME for each external volume returned by SHOW EXTERNAL VOLUMES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/external_volumes#with_describe DataSnowflakeExternalVolumes#with_describe}

---

### DataSnowflakeExternalVolumesExternalVolumes <a name="DataSnowflakeExternalVolumesExternalVolumes" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumes.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumes()
```


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutput <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutput()
```


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations()
```


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation()
```


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation()
```


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation()
```


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation()
```


### DataSnowflakeExternalVolumesExternalVolumesShowOutput <a name="DataSnowflakeExternalVolumesExternalVolumesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutput()
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.active">active</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.allowWrites">allow_writes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.storageLocations">storage_locations</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutput">DataSnowflakeExternalVolumesExternalVolumesDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.active"></a>

```python
active: str
```

- *Type:* str

---

##### `allow_writes`<sup>Required</sup> <a name="allow_writes" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.allowWrites"></a>

```python
allow_writes: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `storage_locations`<sup>Required</sup> <a name="storage_locations" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.storageLocations"></a>

```python
storage_locations: DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeExternalVolumesExternalVolumesDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutput">DataSnowflakeExternalVolumesExternalVolumesDescribeOutput</a>

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureConsentUrl">azure_consent_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureMultiTenantAppName">azure_multi_tenant_app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_consent_url`<sup>Required</sup> <a name="azure_consent_url" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureConsentUrl"></a>

```python
azure_consent_url: str
```

- *Type:* str

---

##### `azure_multi_tenant_app_name`<sup>Required</sup> <a name="azure_multi_tenant_app_name" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureMultiTenantAppName"></a>

```python
azure_multi_tenant_app_name: str
```

- *Type:* str

---

##### `azure_tenant_id`<sup>Required</sup> <a name="azure_tenant_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation</a>

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.encryptionKmsKeyId">encryption_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.storageGcpServiceAccount">storage_gcp_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_kms_key_id`<sup>Required</sup> <a name="encryption_kms_key_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.encryptionKmsKeyId"></a>

```python
encryption_kms_key_id: str
```

- *Type:* str

---

##### `storage_gcp_service_account`<sup>Required</sup> <a name="storage_gcp_service_account" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.storageGcpServiceAccount"></a>

```python
storage_gcp_service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation</a>

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.azureStorageLocation">azure_storage_location</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.gcsStorageLocation">gcs_storage_location</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.s3CompatStorageLocation">s3_compat_storage_location</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.s3StorageLocation">s3_storage_location</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.storageAllowedLocations">storage_allowed_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.storageBaseUrl">storage_base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.storageProvider">storage_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_storage_location`<sup>Required</sup> <a name="azure_storage_location" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.azureStorageLocation"></a>

```python
azure_storage_location: DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList</a>

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `gcs_storage_location`<sup>Required</sup> <a name="gcs_storage_location" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.gcsStorageLocation"></a>

```python
gcs_storage_location: DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `s3_compat_storage_location`<sup>Required</sup> <a name="s3_compat_storage_location" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.s3CompatStorageLocation"></a>

```python
s3_compat_storage_location: DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList</a>

---

##### `s3_storage_location`<sup>Required</sup> <a name="s3_storage_location" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.s3StorageLocation"></a>

```python
s3_storage_location: DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList</a>

---

##### `storage_allowed_locations`<sup>Required</sup> <a name="storage_allowed_locations" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.storageAllowedLocations"></a>

```python
storage_allowed_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_base_url`<sup>Required</sup> <a name="storage_base_url" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.storageBaseUrl"></a>

```python
storage_base_url: str
```

- *Type:* str

---

##### `storage_provider`<sup>Required</sup> <a name="storage_provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.storageProvider"></a>

```python
storage_provider: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations</a>

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.awsAccessKeyId">aws_access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.encryptionKmsKeyId">encryption_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_access_key_id`<sup>Required</sup> <a name="aws_access_key_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.awsAccessKeyId"></a>

```python
aws_access_key_id: str
```

- *Type:* str

---

##### `encryption_kms_key_id`<sup>Required</sup> <a name="encryption_kms_key_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.encryptionKmsKeyId"></a>

```python
encryption_kms_key_id: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation</a>

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.encryptionKmsKeyId">encryption_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsAccessPointArn">storage_aws_access_point_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsExternalId">storage_aws_external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsIamUserArn">storage_aws_iam_user_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsRoleArn">storage_aws_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.usePrivatelinkEndpoint">use_privatelink_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_kms_key_id`<sup>Required</sup> <a name="encryption_kms_key_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.encryptionKmsKeyId"></a>

```python
encryption_kms_key_id: str
```

- *Type:* str

---

##### `storage_aws_access_point_arn`<sup>Required</sup> <a name="storage_aws_access_point_arn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsAccessPointArn"></a>

```python
storage_aws_access_point_arn: str
```

- *Type:* str

---

##### `storage_aws_external_id`<sup>Required</sup> <a name="storage_aws_external_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsExternalId"></a>

```python
storage_aws_external_id: str
```

- *Type:* str

---

##### `storage_aws_iam_user_arn`<sup>Required</sup> <a name="storage_aws_iam_user_arn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsIamUserArn"></a>

```python
storage_aws_iam_user_arn: str
```

- *Type:* str

---

##### `storage_aws_role_arn`<sup>Required</sup> <a name="storage_aws_role_arn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsRoleArn"></a>

```python
storage_aws_role_arn: str
```

- *Type:* str

---

##### `use_privatelink_endpoint`<sup>Required</sup> <a name="use_privatelink_endpoint" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.usePrivatelinkEndpoint"></a>

```python
use_privatelink_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation</a>

---


### DataSnowflakeExternalVolumesExternalVolumesList <a name="DataSnowflakeExternalVolumesExternalVolumesList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeExternalVolumesExternalVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeExternalVolumesExternalVolumesOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList">DataSnowflakeExternalVolumesExternalVolumesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumes">DataSnowflakeExternalVolumesExternalVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.describeOutput"></a>

```python
describe_output: DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakeExternalVolumesExternalVolumesShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList">DataSnowflakeExternalVolumesExternalVolumesShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeExternalVolumesExternalVolumes
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumes">DataSnowflakeExternalVolumesExternalVolumes</a>

---


### DataSnowflakeExternalVolumesExternalVolumesShowOutputList <a name="DataSnowflakeExternalVolumesExternalVolumesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_volumes

dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.allowWrites">allow_writes</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutput">DataSnowflakeExternalVolumesExternalVolumesShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_writes`<sup>Required</sup> <a name="allow_writes" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.allowWrites"></a>

```python
allow_writes: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeExternalVolumesExternalVolumesShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutput">DataSnowflakeExternalVolumesExternalVolumesShowOutput</a>

---



