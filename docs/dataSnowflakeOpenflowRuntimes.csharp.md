# `dataSnowflakeOpenflowRuntimes` Submodule <a name="`dataSnowflakeOpenflowRuntimes` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeOpenflowRuntimes <a name="DataSnowflakeOpenflowRuntimes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes snowflake_openflow_runtimes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowRuntimes(Construct Scope, string Id, DataSnowflakeOpenflowRuntimesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig">DataSnowflakeOpenflowRuntimesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig">DataSnowflakeOpenflowRuntimesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putIn">PutIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetIn">ResetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetStartsWith">ResetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutIn` <a name="PutIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putIn"></a>

```csharp
private void PutIn(DataSnowflakeOpenflowRuntimesIn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

---

##### `PutLimit` <a name="PutLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putLimit"></a>

```csharp
private void PutLimit(DataSnowflakeOpenflowRuntimesLimit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIn` <a name="ResetIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetIn"></a>

```csharp
private void ResetIn()
```

##### `ResetLike` <a name="ResetLike" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLike"></a>

```csharp
private void ResetLike()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetStartsWith"></a>

```csharp
private void ResetStartsWith()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetWithDescribe"></a>

```csharp
private void ResetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeOpenflowRuntimes resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeOpenflowRuntimes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeOpenflowRuntimes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeOpenflowRuntimes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeOpenflowRuntimes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataSnowflakeOpenflowRuntimes resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeOpenflowRuntimes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeOpenflowRuntimes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeOpenflowRuntimes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.in">In</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference">DataSnowflakeOpenflowRuntimesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference">DataSnowflakeOpenflowRuntimesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.openflowRuntimes">OpenflowRuntimes</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.inInput">InInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.likeInput">LikeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limitInput">LimitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWithInput">StartsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribeInput">WithDescribeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.like">Like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWith">StartsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `In`<sup>Required</sup> <a name="In" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.in"></a>

```csharp
public DataSnowflakeOpenflowRuntimesInOutputReference In { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference">DataSnowflakeOpenflowRuntimesInOutputReference</a>

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limit"></a>

```csharp
public DataSnowflakeOpenflowRuntimesLimitOutputReference Limit { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference">DataSnowflakeOpenflowRuntimesLimitOutputReference</a>

---

##### `OpenflowRuntimes`<sup>Required</sup> <a name="OpenflowRuntimes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.openflowRuntimes"></a>

```csharp
public DataSnowflakeOpenflowRuntimesOpenflowRuntimesList OpenflowRuntimes { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InInput`<sup>Optional</sup> <a name="InInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.inInput"></a>

```csharp
public DataSnowflakeOpenflowRuntimesIn InInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.likeInput"></a>

```csharp
public string LikeInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limitInput"></a>

```csharp
public DataSnowflakeOpenflowRuntimesLimit LimitInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWithInput"></a>

```csharp
public string StartsWithInput { get; }
```

- *Type:* string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribeInput"></a>

```csharp
public bool|IResolvable WithDescribeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.like"></a>

```csharp
public string Like { get; }
```

- *Type:* string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWith"></a>

```csharp
public string StartsWith { get; }
```

- *Type:* string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeOpenflowRuntimesConfig <a name="DataSnowflakeOpenflowRuntimesConfig" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowRuntimesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    DataSnowflakeOpenflowRuntimesIn In = null,
    string Like = null,
    DataSnowflakeOpenflowRuntimesLimit Limit = null,
    string StartsWith = null,
    bool|IResolvable WithDescribe = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#id DataSnowflakeOpenflowRuntimes#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.in">In</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.like">Like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.startsWith">StartsWith</a></code> | <code>string</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `true`) Runs DESC OPENFLOW RUNTIME for each runtime returned by SHOW OPENFLOW RUNTIMES. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#id DataSnowflakeOpenflowRuntimes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `In`<sup>Optional</sup> <a name="In" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.in"></a>

```csharp
public DataSnowflakeOpenflowRuntimesIn In { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#in DataSnowflakeOpenflowRuntimes#in}

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.like"></a>

```csharp
public string Like { get; set; }
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#like DataSnowflakeOpenflowRuntimes#like}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.limit"></a>

```csharp
public DataSnowflakeOpenflowRuntimesLimit Limit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#limit DataSnowflakeOpenflowRuntimes#limit}

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.startsWith"></a>

```csharp
public string StartsWith { get; set; }
```

- *Type:* string

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#starts_with DataSnowflakeOpenflowRuntimes#starts_with}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `true`) Runs DESC OPENFLOW RUNTIME for each runtime returned by SHOW OPENFLOW RUNTIMES.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#with_describe DataSnowflakeOpenflowRuntimes#with_describe}

---

### DataSnowflakeOpenflowRuntimesIn <a name="DataSnowflakeOpenflowRuntimesIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowRuntimesIn {
    bool|IResolvable Account = null,
    string Database = null,
    string Schema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.account">Account</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.database">Database</a></code> | <code>string</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.schema">Schema</a></code> | <code>string</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.account"></a>

```csharp
public bool|IResolvable Account { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#account DataSnowflakeOpenflowRuntimes#account}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#database DataSnowflakeOpenflowRuntimes#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#schema DataSnowflakeOpenflowRuntimes#schema}

---

### DataSnowflakeOpenflowRuntimesLimit <a name="DataSnowflakeOpenflowRuntimesLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowRuntimesLimit {
    double Rows,
    string From = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.rows">Rows</a></code> | <code>double</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.from">From</a></code> | <code>string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.rows"></a>

```csharp
public double Rows { get; set; }
```

- *Type:* double

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#rows DataSnowflakeOpenflowRuntimes#rows}

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#from DataSnowflakeOpenflowRuntimes#from}

---

### DataSnowflakeOpenflowRuntimesOpenflowRuntimes <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowRuntimesOpenflowRuntimes {

};
```


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput {

};
```


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeOpenflowRuntimesInOutputReference <a name="DataSnowflakeOpenflowRuntimesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowRuntimesInOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetAccount"></a>

```csharp
private void ResetAccount()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.accountInput">AccountInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.account">Account</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.accountInput"></a>

```csharp
public bool|IResolvable AccountInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.account"></a>

```csharp
public bool|IResolvable Account { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeOpenflowRuntimesIn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

---


### DataSnowflakeOpenflowRuntimesLimitOutputReference <a name="DataSnowflakeOpenflowRuntimesLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowRuntimesLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rowsInput">RowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rows">Rows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `RowsInput`<sup>Optional</sup> <a name="RowsInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rowsInput"></a>

```csharp
public double RowsInput { get; }
```

- *Type:* double

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rows"></a>

```csharp
public double Rows { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeOpenflowRuntimesLimit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.get"></a>

```csharp
private DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.deployment">Deployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.executeAsRole">ExecuteAsRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.initiallySuspended">InitiallySuspended</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.maxNodes">MaxNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.minNodes">MinNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeType">NodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeTypeTier">NodeTypeTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.serverUrl">ServerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.deployment"></a>

```csharp
public string Deployment { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExecuteAsRole`<sup>Required</sup> <a name="ExecuteAsRole" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.executeAsRole"></a>

```csharp
public string ExecuteAsRole { get; }
```

- *Type:* string

---

##### `ExternalAccessIntegrations`<sup>Required</sup> <a name="ExternalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.externalAccessIntegrations"></a>

```csharp
public string[] ExternalAccessIntegrations { get; }
```

- *Type:* string[]

---

##### `InitiallySuspended`<sup>Required</sup> <a name="InitiallySuspended" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.initiallySuspended"></a>

```csharp
public IResolvable InitiallySuspended { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.maxNodes"></a>

```csharp
public double MaxNodes { get; }
```

- *Type:* double

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.minNodes"></a>

```csharp
public double MinNodes { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeType"></a>

```csharp
public string NodeType { get; }
```

- *Type:* string

---

##### `NodeTypeTier`<sup>Required</sup> <a name="NodeTypeTier" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeTypeTier"></a>

```csharp
public string NodeTypeTier { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `ServerUrl`<sup>Required</sup> <a name="ServerUrl" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.serverUrl"></a>

```csharp
public string ServerUrl { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput</a>

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesList <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowRuntimesOpenflowRuntimesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.get"></a>

```csharp
private DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes">DataSnowflakeOpenflowRuntimesOpenflowRuntimes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.describeOutput"></a>

```csharp
public DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.showOutput"></a>

```csharp
public DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeOpenflowRuntimesOpenflowRuntimes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes">DataSnowflakeOpenflowRuntimesOpenflowRuntimes</a>

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.get"></a>

```csharp
private DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.deployment">Deployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.executeAsRole">ExecuteAsRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.initiallySuspended">InitiallySuspended</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.maxNodes">MaxNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.minNodes">MinNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.nodeType">NodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.deployment"></a>

```csharp
public string Deployment { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExecuteAsRole`<sup>Required</sup> <a name="ExecuteAsRole" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.executeAsRole"></a>

```csharp
public string ExecuteAsRole { get; }
```

- *Type:* string

---

##### `ExternalAccessIntegrations`<sup>Required</sup> <a name="ExternalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.externalAccessIntegrations"></a>

```csharp
public string[] ExternalAccessIntegrations { get; }
```

- *Type:* string[]

---

##### `InitiallySuspended`<sup>Required</sup> <a name="InitiallySuspended" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.initiallySuspended"></a>

```csharp
public IResolvable InitiallySuspended { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.maxNodes"></a>

```csharp
public double MaxNodes { get; }
```

- *Type:* double

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.minNodes"></a>

```csharp
public double MinNodes { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.nodeType"></a>

```csharp
public string NodeType { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.updatedOn"></a>

```csharp
public string UpdatedOn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput</a>

---



