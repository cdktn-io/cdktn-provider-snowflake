# `dataSnowflakeOpenflowConnectorDefinitions` Submodule <a name="`dataSnowflakeOpenflowConnectorDefinitions` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeOpenflowConnectorDefinitions <a name="DataSnowflakeOpenflowConnectorDefinitions" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions snowflake_openflow_connector_definitions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorDefinitions(Construct Scope, string Id, DataSnowflakeOpenflowConnectorDefinitionsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig">DataSnowflakeOpenflowConnectorDefinitionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig">DataSnowflakeOpenflowConnectorDefinitionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetLimit">ResetLimit</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutLimit` <a name="PutLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.putLimit"></a>

```csharp
private void PutLimit(DataSnowflakeOpenflowConnectorDefinitionsLimit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLike` <a name="ResetLike" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetLike"></a>

```csharp
private void ResetLike()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetLimit"></a>

```csharp
private void ResetLimit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeOpenflowConnectorDefinitions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeOpenflowConnectorDefinitions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeOpenflowConnectorDefinitions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeOpenflowConnectorDefinitions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeOpenflowConnectorDefinitions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataSnowflakeOpenflowConnectorDefinitions resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeOpenflowConnectorDefinitions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeOpenflowConnectorDefinitions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeOpenflowConnectorDefinitions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference">DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.openflowConnectorDefinitions">OpenflowConnectorDefinitions</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.likeInput">LikeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.limitInput">LimitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.like">Like</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.limit"></a>

```csharp
public DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference Limit { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference">DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference</a>

---

##### `OpenflowConnectorDefinitions`<sup>Required</sup> <a name="OpenflowConnectorDefinitions" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.openflowConnectorDefinitions"></a>

```csharp
public DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList OpenflowConnectorDefinitions { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.likeInput"></a>

```csharp
public string LikeInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.limitInput"></a>

```csharp
public DataSnowflakeOpenflowConnectorDefinitionsLimit LimitInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.like"></a>

```csharp
public string Like { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeOpenflowConnectorDefinitionsConfig <a name="DataSnowflakeOpenflowConnectorDefinitionsConfig" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorDefinitionsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    string Like = null,
    DataSnowflakeOpenflowConnectorDefinitionsLimit Limit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#id DataSnowflakeOpenflowConnectorDefinitions#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.like">Like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a></code> | limit block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#id DataSnowflakeOpenflowConnectorDefinitions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.like"></a>

```csharp
public string Like { get; set; }
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#like DataSnowflakeOpenflowConnectorDefinitions#like}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.limit"></a>

```csharp
public DataSnowflakeOpenflowConnectorDefinitionsLimit Limit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#limit DataSnowflakeOpenflowConnectorDefinitions#limit}

---

### DataSnowflakeOpenflowConnectorDefinitionsLimit <a name="DataSnowflakeOpenflowConnectorDefinitionsLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorDefinitionsLimit {
    double Rows,
    string From = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.property.rows">Rows</a></code> | <code>double</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.property.from">From</a></code> | <code>string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.property.rows"></a>

```csharp
public double Rows { get; set; }
```

- *Type:* double

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#rows DataSnowflakeOpenflowConnectorDefinitions#rows}

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#from DataSnowflakeOpenflowConnectorDefinitions#from}

---

### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions {

};
```


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference <a name="DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.rowsInput">RowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.rows">Rows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `RowsInput`<sup>Optional</sup> <a name="RowsInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.rowsInput"></a>

```csharp
public double RowsInput { get; }
```

- *Type:* double

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.rows"></a>

```csharp
public double Rows { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeOpenflowConnectorDefinitionsLimit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a>

---


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.get"></a>

```csharp
private DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.showOutput"></a>

```csharp
public DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions</a>

---


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.get"></a>

```csharp
private DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.categories">Categories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.minRuntimeNodeType">MinRuntimeNodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.provider">Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.categories"></a>

```csharp
public string[] Categories { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; }
```

- *Type:* double

---

##### `MinRuntimeNodeType`<sup>Required</sup> <a name="MinRuntimeNodeType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.minRuntimeNodeType"></a>

```csharp
public string MinRuntimeNodeType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.provider"></a>

```csharp
public string Provider { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput</a>

---



